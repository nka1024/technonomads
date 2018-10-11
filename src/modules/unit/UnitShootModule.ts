/**
* @author       Kirill Nepomnyaschiy <nka1024@gmail.com>
* @copyright    nka1024
* @description  subtile
* @license      Apache 2.0
*/

import { BaseUnit } from "../../actors/BaseUnit";
import { Scene, GameObjects } from "phaser";
import { IUnitModule } from "../interface/IUnitModule";
import { UnitStateModule } from "./UnitStateModule";
import { UI_DEPTH } from "../../const/const";
import { Point } from "../../types/Position";

export class UnitShootModule implements IUnitModule {

  private owner: BaseUnit;
  private scene: Scene;
  private state: UnitStateModule;


  private baseDistance: number = 5;
  private tmpSpeed: Phaser.Math.Vector2 = new Phaser.Math.Vector2(0, 0);
  private bullets: { object: GameObjects.Image, speed: Point, dest: Point, travel: number }[] = [];
  private shootTimer: any;
  private isShooting: boolean;

  constructor(owner: BaseUnit, scene: Scene, state: UnitStateModule) {
    this.owner = owner;
    this.scene = scene;
    this.state = state;
  }

  // private

  private fire() {
    let a = this.owner;
    let b = this.state.fightTarget;
    var angle = Math.atan2(b.y - a.y, b.x - a.x) * (180 / Math.PI);
    
    let p1 = this.rotate({x: 0, y: -3}, -angle);
    let p2 = this.rotate({x: 0, y: 3}, -angle);
    this.makeBullet(p1);
    this.makeBullet(p2);
    if (this.owner.side == 'attack')
    console.log(p1.x + ' ' + p1.y + ' ' + angle + ' ' +  p2.x + ':'+p2.y) ;
  }

  private makeBullet(offset: Point) {
    if (!this.state.isFighting) {
      this.stopShooting();
      return;
    }
    let key = this.owner.side == 'attack' ? 'bullet_yellow' : 'bullet_blue';
    let bullet = new GameObjects.Image(this.scene, 0, 0, key);
    bullet.x = this.owner.x + offset.x;
    bullet.y = this.owner.y + offset.y;
    bullet.depth = UI_DEPTH.BULLETS;
    this.scene.add.existing(bullet);

    let a = this.owner;
    let b = this.state.fightTarget;
    var angle = Math.atan2(b.y - a.y, b.x - a.x) * (180 / Math.PI);
    bullet.angle = angle;

    let dest = { x: this.state.fightTarget.x + offset.x, y: this.state.fightTarget.y + offset.y };
    let speed = this.calculateSpeed(bullet, dest, this.baseDistance);
    this.bullets.push({ object: bullet, speed: speed, dest: dest, travel: 1 });
  }

  private rotate(vec: Point, ang: number) {
    ang = -ang * (Math.PI / 180);
    var cos = Math.cos(ang);
    var sin = Math.sin(ang);
    let x = Math.round(10000 * (vec.x * cos - vec.y * sin)) / 10000
    let y = Math.round(10000 * (vec.x * sin + vec.y * cos)) / 10000
    return { x: x, y: y };
  };


  private synchronizeShooting() {
    if (this.state.isFighting && !this.isShooting) {
      this.startShooting();
    } else if (!this.state.isFighting && this.isShooting) {
      this.stopShooting();
    }
  }

  private startShooting() {
    this.isShooting = true;
    this.shootTimer = setInterval(() => { this.fire(); }, 300);
  }

  private stopShooting() {
    this.isShooting = false;
    clearInterval(this.shootTimer);
  }

  private stepTowards(bullet: GameObjects.Image, speed: Point, dest: Point, travel: number): boolean {
    this.tmpSpeed.x = dest.x - bullet.x;
    this.tmpSpeed.y = dest.y - bullet.y;
    if (this.tmpSpeed.length() <= this.baseDistance) {
      bullet.x = dest.x;
      bullet.y = dest.y;
      return true;
    }
    bullet.x += speed.x * travel;
    bullet.y += speed.y * travel;
    return false;
  }


  private calculateSpeed(bullet: GameObjects.Image, dest: Point, distance: number): Point {
    this.tmpSpeed.x = dest.x - bullet.x;
    this.tmpSpeed.y = dest.y - bullet.y;
    if (this.tmpSpeed.length() <= distance) {
      bullet.x = dest.x;
      bullet.y = dest.y;
      return { x: 0, y: 0 };
    }
    this.tmpSpeed = this.normalize(this.tmpSpeed, distance);
    return { x: this.tmpSpeed.x, y: this.tmpSpeed.y };
  }


  private normalize(vec: Phaser.Math.Vector2, newLen: number): Phaser.Math.Vector2 {
    var len = vec.x * vec.x + vec.y * vec.y;
    if (len > 0) {
      len = newLen / Math.sqrt(len);
      vec.x = vec.x * len;
      vec.y = vec.y * len;
    }
    return vec;
  }


  // overrides

  update() {
    this.synchronizeShooting();

    for (let bullet of this.bullets) {
      if (bullet.object.active) {
        if (this.stepTowards(bullet.object, bullet.speed, bullet.dest, bullet.travel)) {
          bullet.object.destroy();
          bullet.travel += 10;
        }
      }
    }
    this.bullets = this.bullets.filter((o, idx, arr) => { return o.object.active });
  }

  destroy() {
  }
}
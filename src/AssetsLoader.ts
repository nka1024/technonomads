/**
* @author       Kirill Nepomnyaschiy <nka1024@gmail.com>
* @copyright    nka1024
* @description  nomads
* @license      Apache 2.0
*/

import { CONST } from "./const/const";

export let ASSETS = {
  TERRAIN_MAX: 11,
  GRASS_MAX: 6,
  HOUSE_MAX: 8,
}

export class AssetsLoader {
  public static preload(scene: Phaser.Scene) {
    scene.load.json("map", "./assets/map.json");

    scene.load.audio('blup_1', './assets/audio/blup_1.mp3');
    scene.load.audio('blup_2', './assets/audio/blup_2.mp3');
    scene.load.audio('boop_1', './assets/audio/boop_1.mp3');
    scene.load.audio('explode_1', './assets/audio/explode_1.mp3');
    scene.load.audio('move_1', './assets/audio/move_1.mp3');
    scene.load.audio('move_2', './assets/audio/move_2.mp3');
    scene.load.audio('move_3', './assets/audio/move_3.mp3');
    scene.load.audio('theme', './assets/audio/Nomads_Theme.mp3');
    scene.load.audio('phh_1', './assets/audio/phh_1.mp3');
    scene.load.audio('combat_1', './assets/audio/combat_1.mp3');
    scene.load.audio('turret_1', './assets/audio/turret_1.mp3');

    scene.load.image("grid_128_50", "./assets/grid_128_a50.png");
    scene.load.image("grid_128_30", "./assets/grid_128_a50.png");
    scene.load.image("path_end_14x14", "./assets/path_end_14x14.png");
    scene.load.image("path_mid_14x14", "./assets/path_mid_14x14.png");
    scene.load.spritesheet('fog_tilemap', './assets/fog_tile_32_a70.png', {frameWidth: 32, frameHeight: 32});
    scene.load.image("grid_tile_green_16_a50", "./assets/grid_tile_green_16_a50.png");
    scene.load.image("grid_tile_yellow_16_a50", "./assets/grid_tile_yellow_16_a50.png");
    scene.load.image("grid_tile_red_16_a50", "./assets/grid_tile_red_16_a50.png");
    scene.load.image("cursor", "./assets/cursor.png");
    scene.load.image("cursor_grid_32x32", "./assets/cursor_grid_32x32.png");
    scene.load.image("cursor_grid_2x_32x32", "./assets/cursor_grid_2x_32x32.png");
    scene.load.image("target_select_36x36", "./assets/target_select_36x36.png");
    scene.load.image("target_select_40x40", "./assets/target_select_40x40.png");

    scene.load.image("progress_yellow_50x2", "./assets/progress_yellow_50x2.png");
    scene.load.image("progress_black_52x4", "./assets/progress_black_52x4.png");

    scene.load.image("progress_green_32x2", "./assets/progress_green_32x2.png");
    scene.load.image("progress_black_34x4", "./assets/progress_black_34x4.png");

    scene.load.image("bullet_blue", "./assets/bullet_blue.png");
    scene.load.image("bullet_yellow", "./assets/bullet_yellow.png");

    scene.load.bitmapFont('hello-world-16-white',
      './assets/fonts/hello-world/hello-world-16-white.png',
      './assets/fonts/hello-world/hello-world-16.fnt');
    scene.load.bitmapFont('hello-world-16-shadow',
      './assets/fonts/hello-world/hello-world-16-shadow.png',
      './assets/fonts/hello-world/hello-world-16.fnt');

    scene.load.bitmapFont('pokemon-8-white',
      './assets/fonts/pokemon/pokemon-8-white.png',
      './assets/fonts/pokemon/pokemon-8.fnt');
    scene.load.bitmapFont('pokemon-8-shadow',
      './assets/fonts/pokemon/pokemon-8-shadow.png',
      './assets/fonts/pokemon/pokemon-8.fnt');
    scene.load.bitmapFont('pokemon-8-red',
      './assets/fonts/pokemon/pokemon-8-red.png',
      './assets/fonts/pokemon/pokemon-8.fnt');

    scene.load.bitmapFont('pokemon-8-yellow',
      './assets/fonts/pokemon/pokemon-8-yellow.png',
      './assets/fonts/pokemon/pokemon-8.fnt');

      scene.load.bitmapFont('pokemon-8-green',
      './assets/fonts/pokemon/pokemon-8-green.png',
      './assets/fonts/pokemon/pokemon-8.fnt');

    scene.load.spritesheet('mothership_48x48', './assets/sprites/mothership_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 7
    });
    
    scene.load.spritesheet('k10_idle_anim_48x48', './assets/sprites/k10_idle_anim_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 7
    });

    scene.load.spritesheet('k11_idle_anim_48x48', './assets/sprites/k11_idle_anim_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 7
    });

    scene.load.spritesheet('explosion_anim_1_48x48', './assets/sprites/explosion_anim_1_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 6
    });

    scene.load.spritesheet('explosion_anim_2_48x48', './assets/sprites/explosion_anim_2_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 7
    });

    scene.load.spritesheet('explosion_anim_3_48x48', './assets/sprites/explosion_anim_3_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 10
    });

    scene.load.spritesheet('explosion_anim_3_24x24', './assets/sprites/explosion_anim_3_24x24.png', {
      frameWidth: 24,
      frameHeight: 24,
      endFrame: 10
    });

    scene.load.spritesheet('gatherer_gather_anim_48x48', './assets/sprites/gatherer_gather_anim_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 10
    });

    scene.load.spritesheet('gatherer_walk_anim_48x48', './assets/sprites/gatherer_walk_anim_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 5
    });

    scene.load.spritesheet('builder_walk_anim_48x48', './assets/sprites/builder_walk_anim_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 5
    });
    
    scene.load.spritesheet('builder_build_anim_48x48', './assets/sprites/builder_build_anim_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 7
    });

    scene.load.spritesheet('sentry_idle_anim_48x48', './assets/sprites/sentry_idle_anim_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 8 
    });

    scene.load.spritesheet('guardian_anim_48x48', './assets/sprites/guardian_anim_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 5
    });

    scene.load.spritesheet('tower_anim_90x90', './assets/sprites/tower_anim_90x90.png', {
      frameWidth: 90,
      frameHeight: 90,
      endFrame: 5
    });

    scene.load.spritesheet('boss_anim_100x100', './assets/sprites/boss_anim_100x100.png', {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 7
    });
    scene.load.spritesheet('reactor_anim_48x48', './assets/sprites/reactor_anim_48x48.png', {
      frameWidth: 48,
      frameHeight: 48,
      endFrame: 4
    });

    scene.load.image("terrain_12", "./assets/tilemap/terrain_12.png");
    // for (let idx = 0; idx <= ASSETS.TERRAIN_MAX; idx++) {
    //   scene.load.image("terrain_" + idx, "./assets/tilemap/terrain_" + idx + ".png");
    // }
    for (let idx = 1; idx <= ASSETS.GRASS_MAX; idx++) {
      scene.load.image("grass_" + idx, "./assets/tilemap/grass_" + idx + ".png");
    }
    for (let idx = 1; idx <= ASSETS.HOUSE_MAX; idx++) {
      scene.load.image("house_" + idx, "./assets/tilemap/house_" + idx + ".png");
    }
    for (let idx = 1; idx <= 4; idx++) {
      scene.load.image("actor_" + idx, "./assets/tilemap/actor_" + idx + ".png");
    }
  }
}
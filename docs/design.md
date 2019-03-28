# Tamable - yet another virtual pet engine

## Pet

* シナリオで発生したイベントのハンドリング
  * 状態変更
  * 振る舞いの実行
* 機嫌、空腹、しつけなどのステータスを持つ
* 病気、死などの状態を持つ

* name
* skin
  * face
  * body
* age
* weight
* stats
  * Happy
  * Hunger
  * Discipline
* behavior
  * start
  * run

  * AdultBehavior
  * YoungBehavior
  * BabyBehavior
  * EggBehavior

* dance
* eat
* getJoy
* getAnger
* getSick
* say

## Species

## Relation

* type
* member

### Friend

## Aid

### Bandage
### Medicine

## Feed

### Snack
### Meal

## Scene

* HouseScene
* PlaygroundScene

* menu: action[]
* activity
* skin: Skin
* item

## Renderer

## Application

## onStart

* const scene = new Scene();
* const pet = new Pet();
* scene.add(pet);

## onTick

* 時間経過によって起きるイベント
  * お腹がすく
  * 年齢が上がる
* 特定時刻/時間帯に起きるイベント
  * 起きる
  * 寝る
* 特定の条件を満たすと起きるイベント
  * 進化
  * 死亡
  * 病気
  * 排泄

## onPause/onResume

* 画面を消す/付ける
* 時計を止める/再開する

## clock

* tick

## behavior

a personality represents how a pet's stats will change
This is a set of function that has _act_ interface.

* skin

---

## Plugin

通知を受け取ったら教えてくれる

指紋センサーで値を読み取る
→ログインボーナス
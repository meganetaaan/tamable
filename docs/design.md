# Tamable - yet another virtual pet engine

## Pet

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

* menu: action[]
* activity
* background
* item

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
import {makeAutoObservable} from "mobx"

class Card {
    total = 0
    product = null

    constructor() {
        makeAutoObservable(this)
    }

}
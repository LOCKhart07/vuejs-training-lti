import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'

export const userCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: useLocalStorage('count', 0)
    }),
    actions: {
        incrementCount() {
            this.count++
        },
        decrementCount() {
            this.count--
        }
    },
    getters: {
        oddOrEven: (state) => {
            return (state.count % 2 == 0) ? "ha" : "nah"
        }
    }
})

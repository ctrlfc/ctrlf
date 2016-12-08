/**
 * Created by Ctrlf on 16/11/28.
 */

const STORAGE_KEY = 'todos_vuejs';

export default {
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save(items){
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
}
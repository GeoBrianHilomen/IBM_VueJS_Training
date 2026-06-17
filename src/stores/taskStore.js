 // stores/taskStore.js
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [  { id: 1, name: 'Learn Vue.js', done: false, dueDate: '2023-10-15' },
              { id: 2, name: 'Build a Todo App', done: true, dueDate: '2023-10-20' },
              { id: 3, name: 'Deploy to Production', done: false, dueDate: '2023-10-25' }
           ]
  }),
 
  getters: {
    getTaskById: (state) => {
      return (id) => state.tasks.find(task => task.id === parseInt(id.toString()))
    },
  }
})

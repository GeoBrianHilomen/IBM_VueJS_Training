<template>
  <div>
    <div>
      <div class="field">
        <label class="label">Task Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Task Name" />
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea class="textarea" placeholder="Task Description"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
      >
    </div>
    <div>
      <table class="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ tasks[0].name }}</td>
            <td>{{ tasks[0].description }}</td>
            <td>
              <button class="button is-small is-info">Edit</button>
              <button class="button is-small is-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const tasks = [
  {
    name: "Example Task",
    description: "This is an example task description.",
  },
];
</script>

<style scoped></style>

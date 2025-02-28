import { Given, When, Then } from '@cucumber/cucumber'
import { TodoPage } from '../../pages/todoPage'
import { Page } from 'playwright';

let todoPage: TodoPage;
let page: Page;

Given('User navigates to the test application', async function () {
  page = this.page;
  todoPage = new TodoPage(page);
  todoPage.navigateToURL();
});

Given('User creates a new todo {string}', async function (todo) {

  await todoPage.createTodo(todo);
});

Then('User validates todo {string} appears on the list', async function (todo) {
  await todoPage.validateTodo(todo)
});

Then('User validates todo {string} appears last on the list', async function (todo) {
  await todoPage.validateTodoLastOnList(todo);
});

When('User edits the todo {string} to {string}', async function (oldTodo, newTodo) {
  await todoPage.editTodo(oldTodo, newTodo);
});

Then('User validates todo {string} should not appear on the list', async function (todo) {
  await todoPage.validateTodoNotOnTheList(todo);
});

When('User deletes the todo {string} using the red X', async function (todo) {
  await todoPage.deleteTodo(todo);
});

When('User validates the todo count to be {int}', async function (count) {
  await todoPage.validateTodoCount(count);
});

When('User marks todo {string} as complete', async function (todo) {
  await todoPage.completeTodo(todo);
});

Then('User validates todo {string} is marked with green check', async function (todo) {
  await todoPage.validateGreenCheck(todo);
});

Then('User validates todo {string} is struck off', async function (todo) {
  await todoPage.validateStruckOff(todo);
});

Then('User navigates to {string} todo tab', async function (tabName) {
  await todoPage.switchTab(tabName);
});

When('User clicks Clear Completed button', async function () {
  await todoPage.clearCompleted();
});

Then('User refreshes the page', async function () {
  await todoPage.pageRefresh();
});
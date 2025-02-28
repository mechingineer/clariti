import { expect } from '@playwright/test'
import {errors} from 'playwright'
import * as dotenv from 'dotenv';

dotenv.config();

export class TodoPage {
  private page;

  constructor(page) {
    this.page = page;
  }

  // Define selectors
  //xpaths with variable will be plugged dynamically
  private todoInput = "//input[@class='new-todo']";
  private todoEditInput = "//ul[@class='todo-list']//input[@class='edit']";
  private todoItem = "//ul[@class='todo-list']/li//label[text()='VARIABLE']";
  private todoNthItem = "//ul[@class='todo-list']/li[VARIABLE]//label";
  private todoDeleteButton = "//ul[@class='todo-list']//label[text()='VARIABLE']/following-sibling::button";
  private todoList = "//ul[@class='todo-list']/li";
  private todoCompleteButton = "//ul[@class='todo-list']//label[text()='VARIABLE']/preceding-sibling::input";
  private tabButton = "//ul[@class='filters']//a[text()='VARIABLE']";
  private clearCompletedButton = "//button[@class='clear-completed']";

  //This method is to navigate to the application URL defined in .env file
  async navigateToURL() {
    await this.page.goto(process.env.BASE_URL);
  }

  //This method is to create a new todo
  async createTodo(todo: string) {
    await this.page.fill(this.todoInput, todo);
    await this.page.press(this.todoInput, "Enter");
  }

  //This method is to validate the todo is available in the list based on the name 
  async validateTodo(todo: string) {
    let ele: string = this.todoItem;
    ele = ele.replace('VARIABLE', todo);
    try{
      const result = await Promise.allSettled([
        expect(this.page.locator(ele)).toBeVisible()
    ]);
    const failedAssertion = result.find(r => r.status === "rejected");
        if (failedAssertion) {
            console.log('aseeeeeemmmmm'); // Debugging log
            throw new Error(`Failed to find the todo on the page: ${failedAssertion.reason}`);
        }
    }catch(error:any){
      
        console.log('aseeeeeemmmmm');
        throw new Error('Failed to find the todo on the page');
      
    }
    
  }

  //This method is to validate the recently created todo is available last in the list based on the name 
  async validateTodoLastOnList(todo: string) {
    const elements = await this.todoList;
    const size = await this.page.locator(elements).count();
    let ele: string = this.todoNthItem;
    ele = ele.replace('VARIABLE', size.toString());
    await expect(this.page.locator(ele)).toHaveText(todo);
  }

  //This method is to edit the todo name 
  async editTodo(oldTodo: string, newTodo: string) {
    let ele: string = this.todoItem;
    ele = ele.replace('VARIABLE', oldTodo);
    await this.page.locator(ele).dblclick();
    await this.page.locator(this.todoEditInput).fill(newTodo);
    await this.page.keyboard.press('Enter');
  }

  //This method is to validate that todo is no longer available in list
  async validateTodoNotOnTheList(todo: string) {
    let ele: string = this.todoItem;
    ele = ele.replace('VARIABLE', todo);
    await expect(this.page.locator(ele)).toHaveCount(0);
  }

  //This method is to delete the todo
  async deleteTodo(todo: string) {
    let ele: string = this.todoItem;
    ele = ele.replace('VARIABLE', todo);
    await this.page.locator(ele).hover();
    let ele1: string = this.todoDeleteButton;
    ele1 = ele1.replace('VARIABLE', todo);
    await this.page.locator(ele1).click();
  }

  //This method is to validate the total count of todos available on the page
  async validateTodoCount(count: number) {
    await expect(this.page.locator(this.todoList)).toHaveCount(count);
  }

  //This method is to mark the todo as complete
  async completeTodo(todo: string) {
    let ele: string = this.todoCompleteButton;
    ele = ele.replace('VARIABLE', todo);
    await this.page.locator(ele).click();
  }

  //This method is to validate the green check after marking a certain todo as complete
  async validateGreenCheck(todo: string) {
    let ele: string = this.todoItem;
    ele = ele.replace('VARIABLE', todo);
    let label = await this.page.locator(ele);
    const url = await label.evaluate((element) => {
      return window.getComputedStyle(element).getPropertyValue('background-image');
    })
    await expect(url).toMatch('url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E\")');
  }

  //This method is to validate the todo is struck off on marking the todo as complete
  async validateStruckOff(todo: string) {
    let ele: string = this.todoItem;
    ele = ele.replace('VARIABLE', todo);
    let label = await this.page.locator(ele);
    let txt: string = await label.evaluate((element) => {
      return window.getComputedStyle(element).getPropertyValue('text-decoration');
    })
    await expect(txt).toContain('line-through');
  }

  //This method is to switch between All, Active, and Completed tabs
  async switchTab(tabName: string) {
    let ele: string = this.tabButton;
    ele = ele.replace('VARIABLE', tabName);
    await this.page.locator(ele).click();
  }

  //This method is to clear the completed todos from the list
  async clearCompleted() {
    await this.page.locator(this.clearCompletedButton).click();
  }

  //This method is to refresh the webpage
  async pageRefresh() {
    await this.page.reload({ waitUntil: 'load' });
  }

}
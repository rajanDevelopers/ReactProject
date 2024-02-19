
import './App.css';
import Item from './component/Item';
import ItemDate from './component/ItemDate';

function App() {

const response = [
  { itemName : "Wheel", 
    itemDate : 10,
   itemMonth : 'January', 
    itemYear : 2020

  },
  {
    itemName : "Orange", 
    itemDate : 12,
   itemMonth : 'Febuary', 
    itemYear : 2021

  },
  {
    itemName : "Comport", 
    itemDate : 4,
   itemMonth : 'march', 
    itemYear : 2021

  },
  {
    itemName : "Dove", 
    itemDate : 9,
   itemMonth : 'feburary', 
    itemYear : 2022

  }
 ]




  return (
    <>
    <Item name = {response[0].itemName}></Item>
    Hello ji mai hu apki First Item 
   
    <ItemDate day={response[0].itemDate} month = {response[0].itemMonth} Year = {response[0].itemYear}></ItemDate>
   
   
    <Item name = {response[1].itemName}></Item>
    Hello gi mai hu Apki Second Item 
   
   <ItemDate day={response[1].itemDate} month = {response[1].itemMonth}Year = {response[1].itemYear}></ItemDate>


   <Item name = {response[2].itemName}></Item>
   Hello gi mai hu Apki Third Item 
   
   <ItemDate day={response[2].itemDate} month = {response[2].itemMonth}Year = {response[2].itemYear}></ItemDate>


   <Item name = {response[3].itemName}></Item>
   Hello gi mai hu Apki Forth Item 
   
   <ItemDate day={response[3].itemDate} month = {response[3].itemMonth}Year = {response[3].itemYear}></ItemDate>


    <div className="App">
      <h1>Hello Gee</h1>
       </div>
    </>
  );
}

export default App;

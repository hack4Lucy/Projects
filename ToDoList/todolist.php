<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>To Do List Application</title>

    <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="js/todolist.js"></script>

    <link rel="stylesheet" type="text/css" href="css/style.css">

  </head>
  <body>

    <div class="container">

      <div class="title">
        <h2>To Do List Application</h2>
      </div>

      <div class="main">
        <ul id="todolist">
          <li><input type="checkbox" name="" value="" id="done">item 1 <button type="button" name="button" id="btnDelete">Delete</button></li>
          <li><input type="checkbox" name="" value="" id="done">item 2 <button type="button" name="button" id="btnDelete">Delete</button></li>
          <li><input type="checkbox" name="" value="" id="done">item 3 <button type="button" name="button" id="btnDelete">Delete</button></li>
        </ul>
      </div>

      <div class="add">
        <input type="text" name="" value="" placeholder="add list" id="new-item"><button type="button" name="button" id="btnAdd">Add</button>
      </div>


    </div>
  </body>
</html>

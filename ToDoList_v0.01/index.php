<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>To Do List Application</title>

    <link rel="stylesheet" type="text/css" href="css/style.css?<?php echo time(); ?>">    <!-- The php code is added to dynamically updating css stylesheet -->

    <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="js/todolist.js"></script>
  </head>
  <body>

    <div class="container">

      <div class="title">
        <h2>To Do List Application</h2>
      </div>

      <div class="main">
        <ul id="todolist">
          <li><input type="checkbox" name="" value="" class="done">item 1 <button type="button" name="button" class="delete">Delete</button></li>
          <li><input type="checkbox" name="" value="" class="done">item 2 <button type="button" name="button" class="delete">Delete</button></li>
          <li><input type="checkbox" name="" value="" class="done">item 3 <button type="button" name="button" class="delete">Delete</button></li>
        </ul>
      </div>

      <div class="add">
        <input type="text" name="" value="" placeholder="add list" id="new-item"><button type="button" name="button" id="add">Add</button>
      </div>


    </div>
  </body>
</html>

<?php

  require_once('database.php');
  session_start();
  $id = session_id();
  $query = "UPDATE Users SET sid=0, status=0 WHERE sid='$id'";
  $result = $mysqli->query($query);
  $_SESSION['status'] = 0;

?>

<script type="text/javascript">
window.location.href = '/COMP307/front-end/html/index.php';
</script>
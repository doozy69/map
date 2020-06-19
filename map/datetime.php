<?php
ini_set('date.timezone', 'Europe/Moscow');

$time = date("H:m:s");
$day_week = date("N"); //1-ПН 7-ВС
$parity_week = date("W")%2; //0-ЧЕТ 1-НЕЧЕТ

//9-10:30//10:40-12:10//12:40-14:10//14:20-15:50//16:20-17:50
$time = "9:23:12";
$day_week = 1;
$parity_week = 1;
?>
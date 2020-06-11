<?php
//загрузка отдельных этажей
//echo "<pre>";
if(isset($_POST['floor'])){
	require_once("datetime.php");

	$floor = $_POST['floor']+1;
	//$floor = 4;
	$dbc = mysqli_connect('localhost', 'root', '', 'university');

	$query = "
	SELECT
	 	classroom.number AS n,
	    classroom.name AS cn,
	    classroom.coords AS c,
	    university.group.name AS ugn,
	    fio,
	    predmet.name as pn
	FROM
	    classroom
	LEFT JOIN rasp ON rasp.id_classroom = classroom.id_classroom and day_week = '$day_week' and parity_week = '$parity_week' 
													and id_number_time = (select number_time from time where '$time' BETWEEN start_time and end_time)
	LEFT JOIN university.group ON
	    university.group.id_group = rasp.id_group
	LEFT JOIN prepod ON prepod.id_prepod = rasp.id_prepod
	LEFT JOIN predmet ON rasp.id_predmet = predmet.id_predmet
	WHERE
	    classroom.floor = '$floor'";

	$result = mysqli_query($dbc, $query);
	$data_array = array();

	$data["type"]= "FeatureCollection";
	$data["features"] = array();

	while ($row = mysqli_fetch_assoc($result)) {
		$data1["type"] = "Feature";
		$data1["id"] = "0";
		$data1["properties"]["full_name"] = $row['n'] ." ". $row['cn']." ". $row['ugn'] ." ". $row['fio'];
		$data1["properties"]["number"] = $row['n'];
		$data1["properties"]["name"] = $row['cn'];
		$data1["properties"]["ugn"] = $row['ugn'];
		$data1["properties"]["fio"] = $row['fio'];
		$data1["properties"]["predmet"] = $row['pn'];
		$data1["geometry"]["type"] = "Polygon";
		$data1["geometry"]["coordinates"] = json_decode($row['c']);
	
		if (json_last_error() != 0){
			echo(json_last_error());
			echo "ошибка json ".$row['n'] ." ". $row['cn']." ". $row['ugn'] ." ". $row['fio'];
			die;
		}
		
		array_push($data["features"], $data1);
	}

	echo json_encode($data);
	//print_r($data);
}else{
	//error
	echo "error";
}
?>
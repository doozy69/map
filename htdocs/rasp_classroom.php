<?php
//Расписание на целый день
//echo "<pre>";
if(isset($_POST['number'])){
    require_once("datetime.php");

    $number = $_POST['number'];
    $dbc = mysqli_connect('localhost', 'root', '', 'university');

    $query = "
        SELECT
        rasp.id_number_time as idnt,
        university.group.name as ugn,
        prepod.fio,
        predmet.name as pn
    FROM
        rasp
        Left join classroom On rasp.id_classroom = classroom.id_classroom
        Left join predmet On rasp.id_predmet = predmet.id_predmet
        LEFT JOIN university.group ON university.group.id_group = rasp.id_group
        LEFT JOIN prepod ON prepod.id_prepod = rasp.id_prepod
    WHERE
        rasp.id_classroom =( SELECT id_classroom FROM classroom WHERE classroom.number = '$number') 
        AND day_week = '$day_week' AND parity_week = '$parity_week'
    ORDER BY
        rasp.id_number_time ASC";

    $result = mysqli_query($dbc, $query);
    $data_array = array();

    $data["zoom_info"] = array();
    $data["count"] = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $data1["idnt"] = $row['idnt'];
        $data1["ugn"] = $row['ugn'];
        $data1["fio"] = $row['fio'];
        $data1["pn"] = $row['pn'];
        $data["count"]++;
        array_push($data["zoom_info"], $data1);
    }

    echo json_encode($data);
    //print_r($data);
}else{
    //error
    echo "error";
}

/*?>
SELECT
    rasp.id_number_time as idnt,
    university.group.name as ugn,
    prepod.fio,
    predmet.name as pn
FROM
    rasp
    Left join classroom On rasp.id_classroom = classroom.id_classroom
    Left join predmet On rasp.id_predmet = predmet.id_predmet
    LEFT JOIN university.group ON university.group.id_group = rasp.id_group
    LEFT JOIN prepod ON prepod.id_prepod = rasp.id_prepod
WHERE
    rasp.id_classroom =( SELECT id_classroom FROM classroom WHERE classroom.number = 1801) 
    AND day_week = 1 AND parity_week = 0
ORDER BY
    rasp.id_number_time ASC*/
?>


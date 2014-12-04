<?php include_once './libs/Strategic.php'; ?>
<?php
ini_set('display_errors', 'On');
ini_set('error_reporting', E_ALL);
$entity = "";
$strategic = new Strategic();

if (isset($_GET['type'])) {
    
	if ($_GET['type'] == 'edit') {

        $result = $strategic->update($_POST);
        echo json_encode(array('status'=> $result));

	} else if($_GET['type'] == 'add'){
		$result = $strategic->insert($_POST);
        
        echo json_encode(array('status'=> $result));

    } else if($_GET['type'] == 'delete'){
    	
        $result = $strategic -> delete($_POST['id']);
    	
        echo json_encode(array('status'=> $result));

    } else if($_GET['type']=='all'){
    	$result = $strategic->getDataTableWithPage($_GET['start'], $_GET['limit']);
    	$total = $strategic->count();
    	
		echo json_encode(array('items'=>$result,'total'=>$total[0]["total"]) );

    }
    
}
?>
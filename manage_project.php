<?php include_once './libs/Project.php'; ?>
<?php
ini_set('display_errors', 'On');
ini_set('error_reporting', E_ALL);
$entity = "";
$project = new Project();

if (isset($_GET['type'])) {
    
	if ($_GET['type'] == 'edit') {
		$result = $project->update($_POST);
        echo json_encode(array('status'=> $result));

	} else if($_GET['type'] == 'add'){
		$result = $project->insert($_POST);
        
        echo json_encode(array('status'=> $result));

    } else if($_GET['type'] == 'delete'){
    	
        $result = $project -> delete($_POST['id']);
    	
        echo json_encode(array('status'=> $result));

    } else if($_GET['type']=='all'){
    	$result = $project->getDataTableWithPage($_GET['start'], $_GET['limit']);
    	
    	$total = $project->count();
    	
		echo json_encode(array('items'=>$result,'total'=>$total[0]["total"]) );

    }
    
}
?>
<?php

require_once 'PDOAdapter.php';
require_once 'BaseClass.php';

class Strategy extends BaseClass{

    function __construct() {
        /**
         * Get DB
         */
        parent::__construct();
        $this->table ='strategy';
        
    }

    function EntityEmptry() {
        //$entity = new StdClass; title_en,title_jp,desc_en,desc_jp,image1,image2,image3,created_date
        $entity[0]['id'] = '';
        $entity[0]['year'] = '';
        $entity[0]['name'] = '';
        $entity[0]['seq'] = '';
        return $entity;
    }

    function getDataTable() {
         $sql = "select * from ".$this->table;

        $result = PDOAdpter::getInstance()->select($sql);

        return $result;
    }
    
    function  getDataTableWithPage($start,$limit)
    {
    	$sql = "select * from ".$this->table." limit ".$start.", ".$limit;
    	$result = PDOAdpter::getInstance()->select($sql);
    	
    	return $result;
    }
    
    function count(){
    	
    	$sql = "select count(1) as total from ".$this->table;
    	$result = PDOAdpter::getInstance()->select($sql);
    	
    	return $result;
    	
    }
    
}
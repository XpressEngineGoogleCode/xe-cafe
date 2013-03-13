<?
	// set default layout 
	$oModuleController = &getController('module');
	$oModuleModel = &getModel('module');

	// create homepage
	$title = 'sample_cafe';
	$domain = 'sample';

	$oHomepageAdminController = &getAdminController('homepage');
	$oHomepageAdminController->insertHomepage($title, $domain);

	// insert Notice Document
	$site_srl = $oHomepageAdminController->get('site_srl');
	$module_info = $oModuleModel->getModuleInfoByMid('notice', $site_srl); 

	$oTemplateHandler = &TemplateHandler::getInstance();

	$oDocumentModel = &getModel('document');
	$oDocumentController = &getController('document');

	$obj->module_srl = $module_info->module_srl;

	global $lang;

	$obj->title = $lang->cafe_welcome_title;
	$lang_code = Context::getLangType();
	$obj->content = $oTemplateHandler->compile('./modules/install/script/welcome_content', 'welcome_content_'.$lang_code);

	$output = $oDocumentController->insertDocument($obj);
	if(!$output->toBool()) return $output;
	
	$document_srl = $output->get('document_srl');

	$site_args->site_srl = 0;
	$site_args->index_module_srl = $module_info->module_srl;
	$oModuleController->updateSite($site_args);
?>

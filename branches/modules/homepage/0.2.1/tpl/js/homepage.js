function completeInsertHomepage(ret_obj) {
    var site_srl = ret_obj['site_srl'];
    location.href = current_url.setQuery('site_srl',site_srl).setQuery('act','dispHomepageAdminSetup');
}

function doHomepageInsertAdmin() {
    var fo_obj = xGetElementById("cafeFo");
    var sel_obj = fo_obj.admin_list;
    var admin_id = fo_obj.admin_id.value;
    if(!admin_id) return;

    var opt = new Option(admin_id,admin_id,true,true);
    sel_obj.options[sel_obj.options.length] = opt;

    fo_obj.admin_id.value = '';
    sel_obj.size = sel_obj.options.length;
    sel_obj.selectedIndex = -1;
}

function doHomepageDeleteAdmin() {
    var fo_obj = xGetElementById("cafeFo");
    var sel_obj = fo_obj.admin_list;
    sel_obj.remove(sel_obj.selectedIndex);

    sel_obj.size = sel_obj.options.length;
    sel_obj.selectedIndex = -1;
}

/* 각 메뉴의 버튼 이미지 등록 */
function doHomepageMenuUploadButton(obj) {
	// 이미지인지 체크
	if(!/\.(gif|jpg|jpeg|png)$/i.test(obj.value)) return alert(alertImageOnly);

	var fo_obj = jQuery("#fo_menu")[0];
	fo_obj.act.value = "procHomepageMenuUploadButton";
	fo_obj.target.value = obj.name;
	fo_obj.submit();
	fo_obj.act.value = "";
	fo_obj.target.value = "";
}

/* 메뉴 이미지 업로드 후처리 */
function completeMenuUploadButton(target, filename) {
	var column_name = target.replace(/^menu_/,'');
	var fo_obj = jQuery('#fo_menu')[0];
	var zone_obj = jQuery('#'+target+'_zone');
	var img_obj = jQuery('#'+target+'_img');

	fo_obj[column_name].value = filename;

	var img = new Image();
	img.src = filename;
	img_obj.attr('src', img.src);
	zone_obj.show();
}

/* 업로드된 메뉴 이미지 삭제 */
function doDeleteButton(target) {
	var fo_obj = jQuery("#fo_menu")[0];

	var col_name = target.replace(/^menu_/,'');

	var params = new Array();
	params['target'] = target;
	params['menu_srl'] = fo_obj.menu_srl.value;
	params['menu_item_srl'] = fo_obj.menu_item_srl.value;
	params['filename'] = fo_obj[col_name].value;

	var response_tags = new Array('error','message', 'target');

	exec_xml('menu','procMenuAdminDeleteButton', params, completeDeleteButton, response_tags);
}

function completeDeleteButton(ret_obj, response_tags) {
	var target = ret_obj['target'];
	var column_name = target.replace(/^menu_/,'');

	jQuery('#fo_menu')[0][column_name].value = '';
	jQuery('#'+target+'_img').attr('src', '');
	jQuery('#'+target+'_zone').hide();
}

function doUpdateHomepage(fo_obj, func) {
    var sel_obj = fo_obj.admin_list;
    var arr = new Array();
    for(var i=0;i<sel_obj.options.length;i++) {
        arr[arr.length] = sel_obj.options[i].value;
    }
    fo_obj.homepage_admin.value = arr.join(',');
    procFilter(fo_obj, func);
    return false;

}

function completeUpdateHomepage(ret_obj) {
    alert(ret_obj['message']);
    location.reload();
}

function completeDeleteHomepage(ret_obj) {
    alert(ret_obj['message']);
    location.href = current_url.setQuery('act','dispHomepageAdminContent').setQuery('site_srl','');
}

function homepageLoadMenuInfo(url){
    // clear tree;
    jQuery('#menu > ul > li > ul').remove();
    if(jQuery("ul.simpleTree > li > a").size() ==0)jQuery('<a href="#" class="add"><img src="./common/js/plugins/ui.tree/images/iconAdd.gif" /></a>').bind("click",function(e){homepageAddMenu(0,e);}).appendTo("ul.simpleTree > li");

    //ajax get data and transeform ul il
    jQuery.get(url,function(data){
        jQuery(data).find("node").each(function(i){
            var text = jQuery(this).attr("text");
            var node_srl = jQuery(this).attr("node_srl");
            var parent_srl = jQuery(this).attr("parent_srl");
            var url = jQuery(this).attr("url");

            // node
            var node = jQuery('<li id="tree_'+node_srl+'"><span>'+text+'</span></li>');

            // button
            jQuery('<a href="#" class="add"><img src="./common/js/plugins/ui.tree/images/iconAdd.gif" /></a>').bind("click",function(e){
                jQuery("#tree_"+node_srl+" > span").click();
                homepageAddMenu(node_srl,e);
                return false;
            }).appendTo(node);

            jQuery('<a href="#" class="modify"><img src="./common/js/plugins/ui.tree/images/iconModify.gif" /></a>').bind("click",function(e){
                jQuery.exec_json("homepage.getHomepageMenuItem",{ "node_srl":node_srl},function(data){
                    jQuery("#tree_"+node_srl+" > span").click();
                    data.menu_info['mode'] = 'update';
                    menuFormInsert(data.menu_info);
                    jQuery("#menuItem").css('position','absolute').css('display','block').css('top',e.pageY).css('left',e.pageX).css('zIndex',9999);
                });
                return false;

            }).appendTo(node);

            jQuery('<a href="#" class="delete"><img src="./common/js/plugins/ui.tree/images/iconDel.gif" /></a>').bind("click",function(e){
                homepageDeleteMenu(node_srl);
                return false;
            }).appendTo(node);

            // insert parent child
            if(parent_srl>0){
                if(jQuery('#tree_'+parent_srl+'>ul').length==0) jQuery('#tree_'+parent_srl).append(jQuery('<ul>'));
                jQuery('#tree_'+parent_srl+'> ul').append(node);
            }else{
                if(jQuery('#menu ul.simpleTree > li > ul').length==0) jQuery("<ul>").appendTo('#menu ul.simpleTree > li');
                jQuery('#menu ul.simpleTree > li > ul').append(node);
            }

        });

        //button show hide
        jQuery("#menu li").each(function(){
            if(jQuery(this).parents('ul').size() > max_menu_depth) jQuery("a.add",this).hide();
            if(jQuery(">ul",this).size()>0) jQuery(">a.delete",this).hide();
        });


        // draw tree
        simpleTreeCollection = jQuery('.simpleTree').simpleTree({
            autoclose: false,
            afterClick:function(node){
                //alert("text-"+jQuery('span:first',node).text());
            },
            afterDblClick:function(node){
                //alert("text-"+jQuery('span:first',node).text());
            },
            afterMove:function(destination, source, pos){
                jQuery('#menuItem').css("display",'none');
                if(destination.size() == 0){
                    homepageLoadMenuInfo(xml_url);
                    return;
                }
                var menu_srl = jQuery("#fo_menu input[name=menu_srl]").val();
                var parent_srl = destination.attr('id').replace(/.*_/g,'');
                var target_srl = source.attr('id').replace(/.*_/g,'');
                var brothers = jQuery('#'+destination.attr('id')+' > ul > li:not([class^=line])').length;
                var mode = brothers >1 ? 'move':'insert';
                var source_srl = pos == 0 ? 0: source.prevAll("li:not(.line)").get(0).id.replace(/.*_/g,'');

                jQuery.exec_json("homepage.procHomepageMenuItemMove",{ "menu_srl":menu_srl,"parent_srl":parent_srl,"target_srl":target_srl,"source_srl":source_srl,"mode":mode},
                function(data){
                    if(data.error>0){
                        homepageLoadMenuInfo(xml_url);
                    }
                });
            },

            // i want you !! made by sol
            beforeMovedToLine : function(destination, source, pos){
                return (jQuery(destination).parents('ul').size() + jQuery('ul',source).size() <= max_menu_depth);
            },

            // i want you !! made by sol
            beforeMovedToFolder : function(destination, source, pos){
                return (jQuery(destination).parents('ul').size() + jQuery('ul',source).size() <= max_menu_depth-1);
            },
            afterAjax:function()
            {
                //alert('Loaded');
            },
            animate:true
            ,docToFolderConvert:true
        });

        // open all node
        nodeToggleAll();
    },"xml");
}


function menuFormInsert(obj) {
    if(typeof(obj)=='undefined') return;

    var fo_obj = jQuery("#fo_menu").get(0);

    if(typeof(obj.parent_srl)!='undefined') fo_obj.parent_srl.value = obj.parent_srl;
    if(typeof(obj.menu_item_srl)!='undefined') fo_obj.menu_item_srl.value = obj.menu_item_srl;
    if(typeof(obj.mode)!='undefined') fo_obj.mode.value = obj.mode;
    if(typeof(obj.name)!='undefined') fo_obj['menu_name'].value = obj.name;
    if(typeof(obj.open_window)!='undefined' && obj.open_window=='Y') fo_obj.menu_open_window.checked = true;
    if(typeof(obj.expand)!='undefined' && obj.expand=='Y') fo_obj.menu_expand.checked = true;
    if(typeof(obj.group_srls)!='undefined' && obj.group_srls.length) {
        for(var j=0;j<obj.group_srls.length;j++) {
            var group_srl = obj.group_srls[j];
            for(var i=0; i<fo_obj.group_srls.length;i++) {
                if(group_srl==fo_obj.group_srls[i].value) fo_obj.group_srls[i].checked = true;
            }
        }
    }

    if(typeof(obj.module_id)!='undefined') {
        fo_obj.module_id.value = obj.module_id;
    } else {
        fo_obj.module_id.value = '';
    }

    jQuery("#urlForm").css("display","none");
    if(typeof(obj.module_type)!='undefined') {
        var sel_obj = fo_obj.module_type;
        for(var i=0;i<sel_obj.options.length;i++) {
            if(sel_obj.options[i].value == obj.module_type) {
                sel_obj.selectedIndex = i;
                break;
            }
        }
        if(obj.module_type == 'url') {
            jQuery("#urlForm").css("display","table-row");
            fo_obj.url.value = obj.url;
        }
        fo_obj.module_type.disabled = true;
        fo_obj.mtype.value = obj.module_type;
    }

    if(typeof(obj.normal_btn)!='undefined' && obj.normal_btn) {
        jQuery('#menu_normal_btn_img').attr("src",obj.normal_btn);
        fo_obj.normal_btn.value = obj.normal_btn;
    }
    if(typeof(obj.hover_btn)!='undefined' && obj.hover_btn) {
        jQuery('#menu_hover_btn_img').attr("src",obj.hover_btn);
        fo_obj.hover_btn.value = obj.hover_btn;
    }
    if(typeof(obj.active_btn)!='undefined' && obj.active_btn) {
        jQuery('#menu_active_btn_img').attr("src",obj.active_btn);
        fo_obj.active_btn.value = obj.active_btn;
    }
}

function menuFormReset() {
    var fo_obj = jQuery("#fo_menu").get(0);

    fo_obj.parent_srl.value = '';
    fo_obj.menu_item_srl.value = '';
    fo_obj.mode.value = '';
    fo_obj.target.value = '';
    fo_obj.normal_btn.value = '';
    fo_obj.hover_btn.value = '';
    fo_obj.active_btn.value = '';
    fo_obj.module_id.value = '';

    jQuery(".menu_names").each(function(){ jQuery(this).val(''); });

    //fo_obj.browser_title.value = '';

    fo_obj.menu_open_window.checked = false;
    fo_obj.menu_expand.checked = false;

    for(var i=0; i<fo_obj.group_srls.length;i++) fo_obj.group_srls[i].checked = false;

    fo_obj.module_type.disabled = false;
    var sel_obj = fo_obj.module_type;
    for(var i=0;i<sel_obj.options.length;i++) {
        if(!sel_obj.options[i].disabled) {
            sel_obj.options[i].selected = true;
            break;
        }
    }
    jQuery("#urlForm").css("display","none");
    fo_obj.url.value = '';
    jQuery('#menu_normal_btn_zone','#menu_hover_btn_zone','#menu_active_btn_zone').css("display","none");
    jQuery('#menu_normal_btn_img','#menu_hover_btn_img','#menu_active_btn_img').attr("src","");
    fo_obj.reset();
    location.href = '#';
}

function completeInsertMenuItem(data) {
    var xml_file = data['xml_file'];
    if(!xml_file) return;
    homepageLoadMenuInfo(xml_url);
    jQuery('#menuItem').css("display",'none');
    menuFormReset();
}


function homepageAddMenu(node_srl,e) {
    menuFormReset();
    var obj = new Array();
    obj['mode'] = 'insert';
    if(typeof(node_srl)!='undefined' && node_srl > 0) {
        obj['parent_srl'] = node_srl;
    }

    menuFormInsert(obj);

    jQuery("#menuItem").css('position','absolute').css('display','block').css('top',e.pageY).css('left',e.pageX).css('zIndex',9999);
}


function homepageDeleteMenu(node_srl) {
    if(confirm(lang_confirm_delete)){
        jQuery('#menuItem').css("display",'none');
        var fo_obj = jQuery('#menu_item_form').get(0);
        fo_obj.menu_item_srl.value = node_srl;
        procFilter(fo_obj, delete_menu_item);
    }
}


function nodeToggleAll(){
    jQuery("[class*=close]", simpleTreeCollection[0]).each(function(){
        simpleTreeCollection[0].nodeToggle(this);
    });
}

function doReloadTreeMenu(){
    var menu_srl = jQuery("#fo_menu input[name=menu_srl]").val();

    jQuery.exec_json("menu.procMenuAdminMakeXmlFile",{ "menu_srl":menu_srl},
            function(data){
                 homepageLoadMenuInfo(xml_url);
            }
    );
    jQuery('#menuItem').css("display",'none');
    menuFormReset();
}

function closeTreeMenuInfo(){
    jQuery('#menuItem').css("display",'none');
}


/* 모듈 생성 후 */
function completeInsertBoard(ret_obj) {
    var error = ret_obj['error'];
    var message = ret_obj['message'];

    var page = ret_obj['page'];
    var module_srl = ret_obj['module_srl'];

    alert(message);

    var url = current_url.setQuery('act','dispHomepageBoardInfo');
    if(module_srl) url = url.setQuery('module_srl',module_srl);
    if(page) url.setQuery('page',page);
    location.href = url;
}
function completeInsertGroup(ret_obj) {
    location.href = current_url.setQuery('group_srl','');
}

function completeDeleteGroup(ret_obj) {
    location.href = current_url.setQuery('group_srl','');

}

function completeInsertGrant(ret_obj) {
    var error = ret_obj['error'];
    var message = ret_obj['message'];
    var page = ret_obj['page'];
    var module_srl = ret_obj['module_srl'];

    alert(message);
}

function completeInsertPage(ret_obj) {
    alert(ret_obj['message']);
    location.reload();
}

function completeChangeLayout(ret_obj) {
    location.reload();
}

function doDeleteGroup(group_srl) {
    var fo_obj = xGetElementById('fo_group');
    fo_obj.group_srl.value = group_srl;
    procFilter(fo_obj, delete_group);
}

function changeMenuType(obj) {
    var sel = obj.options[obj.selectedIndex].value;
    if(sel == 'url') {
        jQuery('#urlForm').css("display","table-row");
    } else {
        jQuery('#urlForm').css("display","none");
    }

}

function homepageMoveMenuItem() {
    xAddEventListener(window, 'load', function() { document.body.appendChild(xGetElementById("menuItem")); xGetElementById("menuItem").style.width="550px";} );
}

function doRemoveMember(confirm_msg) {
    var fo_obj = xGetElementById('siteMembers');
    var chk_obj = fo_obj.cart;
    if(!chk_obj) return;


    var values = new Array();
    if(typeof(chk_obj.length)=='undefined') {
        if(chk_obj.checked) values[values.length]=chk_obj.value;
    } else {
        for(var i=0;i<chk_obj.length;i++) {
            if(chk_obj[i].checked) values[values.length]=chk_obj[i].value;
        }
    }
    if(values.length<1) return;

    if(!confirm(confirm_msg)) return;

    params = new Array();
    params['member_srl'] = values.join(',');

    exec_xml('homepage','procHomepageDeleteMember', params, doCompleteRemoveMember);
}

function doCompleteRemoveMember(ret_obj) { 
    alert(ret_obj['message']); 
    location.reload(); 
}

function toggleAccessType(target) {
    switch(target) {
        case 'domain' :
                xGetElementById('cafeFo').domain.value = '';
                xGetElementById('accessDomain').style.display = 'block';
                xGetElementById('accessVid').style.display = 'none';
            break;
        case 'vid' :
                xGetElementById('cafeFo').vid.value = '';
                xGetElementById('accessDomain').style.display = 'none';
                xGetElementById('accessVid').style.display = 'block';
            break;
    }
}

function toggleCafeAccessType(target) {
    switch(target) {
        case 'domain' :
                xGetElementById('accessCafeDomain').style.display = 'block';
            break;
        case 'vid' :
                xGetElementById('accessCafeDomain').style.display = 'none';
            break;
    }
}

function importModule(id) {
    popopen( request_uri.setQuery('module','module').setQuery('act','dispModuleSelectList').setQuery('id',id).setQuery('type','single'), 'ModuleSelect');
}

function insertSelectedModule(id, module_srl, mid, browser_title) {
    params = new Array();
    params['import_module_srl'] = module_srl;
    params['site_srl'] = xGetElementById('foImport').site_srl.value;
    exec_xml('homepage','procHomepageAdminImportModule', params, doComplenteInsertSelectedModule);
}

function doComplenteInsertSelectedModule(ret_obj) {
    location.reload();
}

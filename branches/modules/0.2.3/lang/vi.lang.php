<?php
/*			░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
			░░  * @File   :  common/lang/vi.lang.php                                              ░░
			░░  * @Author :  NHN (developers@xpressengine.com)                                               ░░
			░░  * @Trans  :  DucDuy Dao (webmaster@xpressengine.vn)								  ░░
			░░	* @Website:  http://xpressengine.vn												  ░░
			░░  * @Brief  :  Vietnamese Language Pack (Only basic words are included here)        ░░
			░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/

	$lang->cafe_welcome_title = 'CafeXE has been installed successfully!';

    $lang->cafe = "CafeXE";
	$lang->cafe_management = 'CafeXE 관리';
    $lang->cafe_id = "Cafe ID";
    $lang->cafe_title = "Tiêu đề Cafe";
    $lang->cafe_description = 'Mô tả';
    $lang->cafe_banner = 'Banner';
	$lang->cafe_list = 'Danh sách Cafe';
    $lang->cafe_main_skin = 'Giao diện trang chủ';
    $lang->module_type = "Tên Module";
    $lang->board = "Board";
    $lang->page = "Trang";
    $lang->module_id = "Module ID";
    $lang->item_group_grant = "Nhóm được phép";
    $lang->cafe_info = "Thông tin Cafe";
    $lang->cafe_admin = "CafeXE Administrator";
    $lang->do_selected_member = "Chuyển những thành viên đã chọn vào: ";
	$lang->new_cafe = 'New Cafe';
    $lang->cafe_latest_documents = "Bài viết mới nhất của Cafe";
    $lang->cafe_latest_comments = "Bình luận mới nhất của Cafe";
    $lang->mycafe_list = "Những Cafe đã tạo";
    $lang->cafe_creation_type = "Phân loại";
    $lang->about_cafe_creation_type = "Xin hãy hướng dẫn người dùng tạo Cafe, Nếu chọn ID của Website thì khi tạo Cafe sẽ có dạng:  'http://defaultAddr/SiteID', Nếu chọn trường hợp của Domain, địa chỉ của Cafe sẽ có dạng một Subdomain 'http://subdomain.defaultDomain'";
    $lang->cafe_main_layout = "Giao diện chính";

    $lang->default_layout = 'Giao diện mặc định';
    $lang->about_default_layout = 'Bạn có thể đặt mặc định giao diện khi những Cafe mới được tạo.';
    $lang->enable_change_layout = 'Cho phép thay đổi giao diện';
    $lang->about_change_layout = 'Cho phép thay đổi giao diện theo sở thích.';
    $lang->allow_service = 'Những dịch vụ cho phép';
    $lang->about_allow_service = 'Bạn có thể thiếp lập các dịch vụ mặc định khi người dùng tạo Cafe mới.';

    $lang->cmd_make_cafe = 'Tạo Cafe';
    $lang->cmd_import = 'Nhập vào';
    $lang->cmd_export = 'Xuất ra';
    $lang->cafe_creation_privilege = 'Quyền tạo Cafe';

    $lang->cafe_main_mid = 'Cafe ID';
    $lang->about_cafe_main_mid = "Nhập ID của Cafe, sẽ được hiển thị dạng: http://addr/<b>cafeID</b>";

    $lang->default_menus = array(
        'home' => 'Trang chủ',
        'notice' => 'Thông báo',
        'levelup' => 'Request rating up',
        'freeboard' => 'Off-topics',
        'view_total' => 'Xem tất cả',
        'view_comment' => 'Story line',
        'cafe_album' => 'Cafe Album',
        'menu' => 'Menu',
        'default_group1' => 'Thành viên đang chờ duyệt',
        'default_group2' => 'Associate',
        'default_group3' => 'Member',
    );

    $lang->cmd_admin_menus = array(
        "dispHomepageManage" => "Cấu hình",
        "dispHomepageMemberGroupManage" => "Quản lý nhóm",
        "dispHomepageMemberManage" => "Danh sách thành viên",
        "dispHomepageTopMenu" => "Quản lý Menu",
        "dispHomepageComponent" => "Thiết lập Thành phần",
        "dispHomepageCounter" => "Trạng thái kết nối",
        "dispHomepageMidSetup" => "Cấu hình Module",
    );
    $lang->cmd_cafe_registration = "Tạo Cafe";
    $lang->cmd_cafe_setup = "Cài đặt Cafe";
    $lang->cmd_cafe_delete = "Xóa";
    $lang->cmd_go_home = "Chuyển tới trang chủ";
    $lang->cmd_go_cafe_admin = 'Gói CafeXE';
    $lang->cmd_change_layout = "Thay đổi";
    $lang->cmd_select_index = "Chọn trang chủ";
    $lang->cmd_add_new_menu = "Thêm Menu";
    $lang->default_language = "Ngôn ngữ mặc định";
    $lang->about_default_language = "Bạn có thể thiếp đặt ngôn ngữ mặc định.";

    $lang->about_cafe_act = array(
        "dispHomepageManage" => "Bạn có thể trình bày giao diện của Cafe tại đây.",
        "dispHomepageMemberGroupManage" => "Bạn có thể quản lý nhóm sử dụng trong Cafe này.",
        "dispHomepageMemberManage" => "Bạn có thể liệt kê và quản lý những thành viên đã đăng ký.",
        "dispHomepageTopMenu" => "Bạn có thể quản lý những Menu mặc định.",
        "dispHomepageComponent" => "Bạn có thể mở soạn thảo thành phần / Addons và cấu hình chúng.",
        "dispHomepageCounter" => "Bạn có thể thấy được trạng thái kết nối của Cafe.",
        "dispHomepageMidSetup" => "Bạn có thể cấu hình những Module, những trang và Board sử dụng trong Cafe."
    );
    $lang->about_cafe = "Gói CafeXE cung cấp những đặc tính để tạo ra những tiệm Cafe và định hình chúng một cách thuận tiện.";
    $lang->about_cafe_title = "Tiêu đề chỉ sử dụng cho quản lý, nó sẽ không được hiển thị.";
    $lang->about_menu_names = "Bạn có thể đặt tiêu đè của Menu cho mội dạng ngôn ngữ<br />Nếu bạn chỉ nhập vào một tiêu đề duy nhất, tiêu đề này sẽ hiển thị giống nhau trên mọi ngôn ngữ.";
    $lang->about_menu_option = "Bạn có thể dặt mở ra trang mới khi bấm vào Menu.<br />Tùy chọn này hoạt động phụ thuộc vào cách trình bày giao diện.";

    $lang->about_group_grant = 'Nếu bạn chọn một nhóm thì chỉ nhóm này mới có thể thấy được Menu. (Nếu File XML được mở trực tiếp, nó sẽ được hiển thị.)';
    $lang->about_module_type = "Nó sẽ tạo một Module cho những Board, Trangvà những URL, nó sẽ tạo một Link cho URL.<br/>Định dạng này sẽ không thể thay đổi khi đã tạo xong.";
    $lang->about_browser_title = "Nó sẽ hiển thị trên tiêu đề của trình duyệt khi người dùng truy cập.";
    $lang->about_module_id = "Module ID sẽ cho phép người truy cập qua ID này, <br /> Ví dụ: http://address/<b>[moduleID]</b>";
    $lang->about_menu_item_url = "Nếu đích là URL, hãy nhập địa chỉ tại đây <br />không sử dụng http://. Ví dụ: <b>vietxe.net</b>";
    $lang->about_menu_image_button = "Có thể sử dụng hình ảnh để thay thế tiêu đề.";
    $lang->about_cafe_delete = "Chú ý! Nếu xóa Cafe, tất cả những Module gồm Board, trang, bài viết và những địa chỉ tạo ra từ Cafe đó cũng sẽ bị xóa.";
    $lang->about_cafe_admin = "Bạn có thể đặt Administrator của Cafe. <br />Administrator của Cafe có thể truy cập trang quản lý qua địa chỉ <b>http://address/?act=dispHomepageManage</b>. Chỉ cho phép những ID đã được đặt là Administrator.";

    $lang->confirm_change_layout = "Nếu thay đổi giao diện, nội dung và thông tin đã sửa đổi sẽ bị xóa. Bạn có muốn thay đổi không?";
    $lang->confirm_delete_menu_item = "Nếu bạn xóa Menu, những địa chỉ Board và trang cũng sẽ bị xóa. Bạn có muốn xóa không?";
	$lang->msg_default_mid_cannot_delete = 'Bạn không thể xóa Menu đã được thiết lập tại trang quản lý Cafe. Nếu muốn xóa, xin hãy trở lại trang quản lý và xóa tại đó.';
    $lang->msg_module_count_exceed = "Số Module đã bị giới hạn, bạn không thể tạo thêm được Module.";
    $lang->msg_not_enabled_id = 'ID không thể sử dụng được.';
    $lang->msg_same_site = 'Module không thể di chuyển được trước Website ảo.';
    $lang->about_move_module = "Module có thể di chuyển thành Site ảo.<br />Những Module di chuyển, được phép đặt ghi chú. Đồng thời, nếu ở đó tồn tại một Module tương tự, nó sẽ hiển thị thông báo lỗi. Vì vậy chỉ di chuyển khi chưa có Module nào cùng tên tồn tại ở đó.";
    $lang->msg_greeting = 'Xin chào <strong>%s</strong>!';
    $lang->msg_module_type_setting = 'Định dạng Module chưa được chọn.';

	$lang->newest_comment = 'Recent Comments';
	$lang->addon_name = 'Addon name';
	$lang->config_top_menu = 'Config top menu';
	$lang->about_config_top_menu = 'Select top menu.';
	$lang->msg_not_export_index_module = 'You can not export module that is index page of cafe.';
?>

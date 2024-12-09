<template>
  <view>
    <view class="container diy_view">
      <view>
        <view>
          <view class="">
            <uni-forms :modelValue="form"  v-if="is_view()">

              <uni-forms-item v-if="$check_field('get','user_information') || $check_field('add','user_information') || $check_field('set','user_information')" label="用户信息" name="user_information">
                        <uni-data-select
                  id="form_user_information"
                  v-model="form['user_information']"
                  :localdata="list_user_user_information"
                  :clear="!disabledObj['user_information_isDisabled']"
                  :disabled="disabledObj['user_information_isDisabled']"
                  v-if="user_group === '管理员' || (form['appointment_information_id'] && $check_field('set','user_information')) || (!form['appointment_information_id'] && $check_field('add','user_information'))"
                ></uni-data-select>
                <uni-data-select
                  v-model="form['user_information']"
                  :localdata="list_user_user_information"
                  :clear="false"
                  :disabled="true"
                  v-else-if="$check_field('get','user_information')" id="user_information"
                ></uni-data-select>
                    </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','user_name') || $check_field('add','user_name') || $check_field('set','user_name')" label="用户姓名" name="user_name">
                                <uni-easyinput type="text" v-model="form['user_name']" v-if="user_group === '管理员' || (form['appointment_information_id'] && $check_field('set','user_name')) || (!form['appointment_information_id'] && $check_field('add','user_name'))" :disabled="disabledObj['user_name_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','user_name')">
                  {{ form['user_name'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','user_gender') || $check_field('add','user_gender') || $check_field('set','user_gender')" label="用户性别" name="user_gender">
                        <uni-data-select
                  v-model="form.user_gender"
                  :localdata="list_user_gender"
                  :clear="!disabledObj['user_gender_isDisabled']"
                  :disabled="disabledObj['user_gender_isDisabled']"
                  v-if="user_group === '管理员' || (form['appointment_information_id'] && $check_field('set','user_gender')) || (!form['appointment_information_id'] && $check_field('add','user_gender'))"
                ></uni-data-select>
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','user_gender')">
                  {{ form['user_gender'] }}
                </text>
                    </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','user_age') || $check_field('add','user_age') || $check_field('set','user_age')" label="用户年龄" name="user_age">
                                <uni-easyinput type="text" v-model="form['user_age']" v-if="user_group === '管理员' || (form['appointment_information_id'] && $check_field('set','user_age')) || (!form['appointment_information_id'] && $check_field('add','user_age'))" :disabled="disabledObj['user_age_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','user_age')">
                  {{ form['user_age'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','consultant_information') || $check_field('add','consultant_information') || $check_field('set','consultant_information')" label="咨询师信息" name="consultant_information">
                        <uni-data-select
                  id="form_consultant_information"
                  v-model="form['consultant_information']"
                  :localdata="list_user_consultant_information"
                  :clear="!disabledObj['consultant_information_isDisabled']"
                  :disabled="disabledObj['consultant_information_isDisabled']"
                  v-if="user_group === '管理员' || (form['appointment_information_id'] && $check_field('set','consultant_information')) || (!form['appointment_information_id'] && $check_field('add','consultant_information'))"
                ></uni-data-select>
                <uni-data-select
                  v-model="form['consultant_information']"
                  :localdata="list_user_consultant_information"
                  :clear="false"
                  :disabled="true"
                  v-else-if="$check_field('get','consultant_information')" id="consultant_information"
                ></uni-data-select>
                    </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','name_of_consultant') || $check_field('add','name_of_consultant') || $check_field('set','name_of_consultant')" label="咨询师姓名" name="name_of_consultant">
                                <uni-easyinput type="text" v-model="form['name_of_consultant']" v-if="user_group === '管理员' || (form['appointment_information_id'] && $check_field('set','name_of_consultant')) || (!form['appointment_information_id'] && $check_field('add','name_of_consultant'))" :disabled="disabledObj['name_of_consultant_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','name_of_consultant')">
                  {{ form['name_of_consultant'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','time_of_appointment') || $check_field('add','time_of_appointment') || $check_field('set','time_of_appointment')" label="预约时间" name="time_of_appointment">
                        <uni-datetime-picker v-if="user_group === '管理员' || (form['appointment_information_id'] && $check_field('set','time_of_appointment')) || (!form['appointment_information_id'] && $check_field('add','time_of_appointment'))" @change="changeLog($event,'time_of_appointment')" v-model="form['time_of_appointment']" type="datetime" :disabled="disabledObj['time_of_appointment_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','time_of_appointment')">
                  {{ form['time_of_appointment'] }}
                </text>
                    </uni-forms-item>


            </uni-forms>
            <view class="form_button">
              <button size="mini" type="primary" @click="submit()" class="primary_btn">提交</button>
              <button size="mini" @click="cancel()">取消</button>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import mixin from "@/libs/mixins/page.js";

export default {
  mixins: [mixin],
  data() {
    return {
      field: "appointment_information_id",
      url_add: "~/api/appointment_information/add?",
      url_set: "~/api/appointment_information/set?",
      url_get_obj: "~/api/appointment_information/get_obj?",
      url_upload: "~/api/appointment_information/upload?",

      query: {
        "appointment_information_id": 0,
      },

      form: {
            "user_information": 0, // 用户信息
                    "user_name":  '', // 用户姓名
                    "user_gender":  '', // 用户性别
                    "user_age":  '', // 用户年龄
                    "consultant_information": 0, // 咨询师信息
                    "name_of_consultant":  '', // 咨询师姓名
                    "time_of_appointment": this.$toTime(new Date().getTime(), "yyyy-MM-dd hh:mm:ss"),
                                "appointment_information_id": 0, // ID
                
              },
          disabledObj:{
                        "user_information_isDisabled": false,
                                "user_name_isDisabled": false,
                                "user_gender_isDisabled": false,
                                "user_age_isDisabled": false,
                                "consultant_information_isDisabled": false,
                                "name_of_consultant_isDisabled": false,
                                "time_of_appointment_isDisabled": false,
                                  },
                                // 用户列表
            list_user_user_information: [],
                        // 用户组
            group_user_user_information: "",
                                                              // 用户性别选项列表
          list_user_gender: [],
                                                                    // 用户列表
            list_user_consultant_information: [],
                                                                                  }
  },
  methods: {
    changeLog(v,value){
      this.form[value] = v
    },
    /**
     * 上传文件
     * @param {Object} param文件参数
     */
    change_file(key_name){
      var _self = this;
      // 选择图像方法
      uni.chooseFile({
        count: 1,
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function(res) {
          const tempFilePaths = res.tempFilePaths;
          const uploadTask = uni.uploadFile({
            url: _self.$fullUrl('/api/appointment_information/upload?'),
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'i_want_to_customize': 'test'
            },
            header: {
              'x-auth-token': _self.$store.state.user.token
            },
            success: function(uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url
              _self.form[key_name] = filename
            }
          });

          uploadTask.onProgressUpdate(function(res) {
            _self.percent = res.progress;
            console.log('上传进度' + res.progress);
            console.log('已经上传的数据长度' + res.totalBytesSent);
            console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
          });
        },
        error: function(e) {
          console.log(e);
        }
      });
    },
    /**
     * 上传图片
     * @param {Object} param文件参数
     */
    change_img(key_name){
      var _self = this;
      _self.upload_img_flag = false
      // 选择图像方法
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function(res) {
          const tempFilePaths = res.tempFilePaths;
          const uploadTask = uni.uploadFile({
            url: _self.$fullUrl('/api/appointment_information/upload?'),
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'i_want_to_customize': 'test'
            },
            header: {
              'x-auth-token': _self.$store.state.user.token
            },
            success: function(uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url
              _self.form[key_name] = filename
            }
          });

          uploadTask.onProgressUpdate(function(res) {
            _self.percent = res.progress;
            console.log('上传进度' + res.progress);
            console.log('已经上传的数据长度' + res.totalBytesSent);
            console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
          });
        },
        error: function(e) {
          console.log(e);
        }
      });
    },
    /**
     * 获取对象后获取缓存表单
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_before(param){
      var form = uni.db.get("form");
      if (form) {
        delete(form.examine_state)
        delete(form.examine_reply)
        this.obj = uni.push(this.obj ,form);
        this.form = uni.push(this.form ,form);
      }
      var arr = []
      for (let key in form) {
        arr.push(key)
      }
      for (var i=0;i<arr.length;i++){
        this.disabledObj[arr[i] + '_isDisabled'] = true
      }
                                                          if (this.form["time_of_appointment"] && JSON.stringify(this.form["time_of_appointment"]).indexOf("-")===-1) {
        this.form["time_of_appointment"] = this.$toTime(parseInt(this.form["time_of_appointment"]), "yyyy-MM-dd hh:mm:ss")
      }
              uni.db.del("form");
      return param;
    },
            /**
     * 获取系统用户用户列表
     */
    async get_list_user_user_information() {
      // if(this.user_group !== "管理员" && this.form["user_information"] === 0) {
      //     this.form["user_information"] = this.user.user_id;
      // }
      var json = await this.$get("~/api/user/get_list?user_group=系统用户");
      if(json.result && json.result.list){
        json.result.list.map((o) => this.list_user_user_information.push({value:o.user_id,text:o.nickname + '-' + o.username}));
      }
      else if(json.error){
        console.error(json.error);
      }
    },
            /**
     * 获取系统用户用户组
     */
    async get_group_user_user_information() {
      this.form["user_information"] = this.user.user_id;
      var json = await this.$get("~/api/user_group/get_obj?name=系统用户");
      if(json.result && json.result.obj){
        this.group_user_user_information = json.result.obj;
        this.get_user_session_user_information(this.form['user_information'])
      }
      else if(json.error){
        console.error(json.error);
      }
    },
    get_user_session_user_information(id){
      var _this = this;
      var user_id = {"user_id":id}
      var url = "~/api/"+_this.group_user_user_information.source_table+"/get_obj?"
      this.$get(url, user_id, function(res) {
        if (res.result && res.result.obj) {
          var arr = []
          for (let key in res.result.obj) {
            arr.push(key)
          }
          var arrForm = []
          for (let key in _this.form) {
            arrForm.push(key)
          }
          for (var i=0;i<arr.length;i++){
            if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arr[i] === arrForm[j]) {
                  if (arr[i] !== "user_information") {
                    _this.form[arrForm[j]] = res.result.obj[arr[i]]
                    _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                    break;
                  } else {
                    _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                  }
                }
              }
            }
          }
        }
      });
    },
            
            
            /**
     * 获取用户性别列表
     */
    async get_list_user_gender() {
          ['男','女'].map((o) => this.list_user_gender.push({value:o,text:o}));
            },
        
            
                /**
     * 获取咨询师用户列表
     */
    async get_list_user_consultant_information() {
      // if(this.user_group !== "管理员" && this.form["consultant_information"] === 0) {
      //     this.form["consultant_information"] = this.user.user_id;
      // }
      var json = await this.$get("~/api/user/get_list?user_group=咨询师");
      if(json.result && json.result.list){
        json.result.list.map((o) => this.list_user_consultant_information.push({value:o.user_id,text:o.nickname + '-' + o.username}));
      }
      else if(json.error){
        console.error(json.error);
      }
    },
            
            
            
    
    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func){
                                                          if (this.form["time_of_appointment"] && JSON.stringify(this.form["time_of_appointment"]).indexOf("-")===-1) {
        this.form["time_of_appointment"] = this.$toTime(parseInt(this.form["time_of_appointment"]), "yyyy-MM-dd hh:mm:ss")
      }
            },

    is_view(){
      var bl = this.user_group == "管理员";

      if(!bl){
        bl = this.$check_action('/appointment_information/table','add');
        console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
      }
      if(!bl){
        bl = this.$check_action('/appointment_information/table','set');
        console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
      }
      if(!bl){
        bl = this.$check_action('/appointment_information/view','add');
        console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
      }
      if(!bl){
        bl = this.$check_action('/appointment_information/view','set');
        console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
      }
      if(!bl){
        bl = this.$check_action('/appointment_information/view','get');
        console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
      }

      console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

      return bl;
    },

  },
  created() {
            this.get_list_user_user_information();
            this.get_group_user_user_information();
                            this.get_list_user_gender();
                            this.get_list_user_consultant_information();
                              },
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.form_button{
  padding-bottom: 15px;
  display: flex;
}
.form_button button{
  width: 40%;
}
.query_select{
  border-color: rgb(229, 229, 229);
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  line-height: 2;
  font-size: 14px;
  height: 2.4em;
  min-height: 2.4em;
  display: block;
  outline:none;
}

.query_option{
  width: 100%;
}

.btn_add_img{
  color: #D3D3D3;
  text-align: center;
  border: 1px solid #eee;
  height: 5rem;
  width: 5rem;
  position: relative;
}
.btn_add_img text{
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.form_button {
  padding-bottom: 15px;
  display: flex;
}
.form_button button {
  width: 40%;
}
.query_select {
  border-color: rgb(229, 229, 229);
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  line-height: 2;
  font-size: 14px;
  height: 2.4em;
  min-height: 2.4em;
  display: block;
  outline: none;
}

.query_option {
  width: 100%;
}

.btn_add_img {
  color: #d3d3d3;
  text-align: center;
  border: 1px solid #eee;
  height: 5rem;
  width: 5rem;
  position: relative;
}
.btn_add_img text {
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/*新样式*/
.uni-forms{
padding-top:1rem;
}
.uni-forms-item {
	padding: 6px 10px;
    background: #f8f6fc;
}
.uni-forms .is-input-border{
	border: 0;
}
.container{
	    -webkit-box-shadow: 0px 0px 0px #888888;
	    box-shadow: 0px 0px 0px #888888;
}
.form_button .primary_btn{
		background-color: #22B8B8;
		color: #FFFFFF;
	}
</style>

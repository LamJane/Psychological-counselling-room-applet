<template>
  <view>
    <view class="container diy_view">
      <view>
        <view>
          <view class="">
            <uni-forms :modelValue="form"  v-if="is_view()">

              <uni-forms-item v-if="$check_field('get','consultant_information') || $check_field('add','consultant_information') || $check_field('set','consultant_information')" label="咨询师信息" name="consultant_information">
                        <uni-data-select
                  id="form_consultant_information"
                  v-model="form['consultant_information']"
                  :localdata="list_user_consultant_information"
                  :clear="!disabledObj['consultant_information_isDisabled']"
                  :disabled="disabledObj['consultant_information_isDisabled']"
                  v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','consultant_information')) || (!form['psychological_counseling_id'] && $check_field('add','consultant_information'))"
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
                                <uni-easyinput type="text" v-model="form['name_of_consultant']" v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','name_of_consultant')) || (!form['psychological_counseling_id'] && $check_field('add','name_of_consultant'))" :disabled="disabledObj['name_of_consultant_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','name_of_consultant')">
                  {{ form['name_of_consultant'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','gender_of_consultant') || $check_field('add','gender_of_consultant') || $check_field('set','gender_of_consultant')" label="咨询师性别" name="gender_of_consultant">
                        <uni-data-select
                  v-model="form.gender_of_consultant"
                  :localdata="list_gender_of_consultant"
                  :clear="!disabledObj['gender_of_consultant_isDisabled']"
                  :disabled="disabledObj['gender_of_consultant_isDisabled']"
                  v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','gender_of_consultant')) || (!form['psychological_counseling_id'] && $check_field('add','gender_of_consultant'))"
                ></uni-data-select>
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','gender_of_consultant')">
                  {{ form['gender_of_consultant'] }}
                </text>
                    </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','professional_treatment') || $check_field('add','professional_treatment') || $check_field('set','professional_treatment')" label="专业主治" name="professional_treatment">
                                <uni-easyinput type="text" v-model="form['professional_treatment']" v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','professional_treatment')) || (!form['psychological_counseling_id'] && $check_field('add','professional_treatment'))" :disabled="disabledObj['professional_treatment_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','professional_treatment')">
                  {{ form['professional_treatment'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','areas_of_expertise') || $check_field('add','areas_of_expertise') || $check_field('set','areas_of_expertise')" label="擅长领域" name="areas_of_expertise">
                                <uni-easyinput type="text" v-model="form['areas_of_expertise']" v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','areas_of_expertise')) || (!form['psychological_counseling_id'] && $check_field('add','areas_of_expertise'))" :disabled="disabledObj['areas_of_expertise_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','areas_of_expertise')">
                  {{ form['areas_of_expertise'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','introduction_to_consultants') || $check_field('add','introduction_to_consultants') || $check_field('set','introduction_to_consultants')" label="咨询师简介" name="introduction_to_consultants">
                        <uni-easyinput type="textarea" v-model="form['introduction_to_consultants']" v-if="user_group === '管理员' || (form['psychological_counseling_id'] && $check_field('set','introduction_to_consultants')) || (!form['psychological_counseling_id'] && $check_field('add','introduction_to_consultants'))" :disabled="disabledObj['introduction_to_consultants_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','introduction_to_consultants')">
                  {{ form['introduction_to_consultants'] }}
                </text>
                    </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','photos_of_consultants') || $check_field('add','photos_of_consultants') || $check_field('set','photos_of_consultants')" label="咨询师照片" name="photos_of_consultants">
                        <!-- 修改权限 -->
                <view class="diy_field diy_img" v-if="form['photos_of_consultants'] && $check_field('set','photos_of_consultants')">
                  <image v-if="disabledObj['photos_of_consultants_isDisabled']" :src="$fullUrl(form['photos_of_consultants'])" />
                  <image v-if="!disabledObj['photos_of_consultants_isDisabled']" :src="$fullUrl(form['photos_of_consultants'])" @click="change_img('photos_of_consultants')" />
                </view>
                <!-- 添加权限 -->
                <view class="diy_field diy_img" v-else-if="!form['photos_of_consultants'] && $check_field('add','photos_of_consultants')">
                  <view v-if="disabledObj['photos_of_consultants_isDisabled']" class="btn_add_img">
                    <text>+</text>
                  </view>
                  <view v-if="!disabledObj['photos_of_consultants_isDisabled']" class="btn_add_img" @click="change_img('photos_of_consultants')">
                    <text>+</text>
                  </view>
                </view>
                <!-- 查询权限 -->
                <view class="diy_field diy_img" v-else-if="$check_field('get','photos_of_consultants')">
                  <image :src="$fullUrl(form['photos_of_consultants'])" />
                </view>
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
      field: "psychological_counseling_id",
      url_add: "~/api/psychological_counseling/add?",
      url_set: "~/api/psychological_counseling/set?",
      url_get_obj: "~/api/psychological_counseling/get_obj?",
      url_upload: "~/api/psychological_counseling/upload?",

      query: {
        "psychological_counseling_id": 0,
      },

      form: {
            "consultant_information": 0, // 咨询师信息
                    "name_of_consultant":  '', // 咨询师姓名
                    "gender_of_consultant":  '', // 咨询师性别
                    "professional_treatment":  '', // 专业主治
                    "areas_of_expertise":  '', // 擅长领域
                    "introduction_to_consultants":  '', // 咨询师简介
                    "photos_of_consultants":  '', // 咨询师照片
                                "psychological_counseling_id": 0, // ID
                
              },
          disabledObj:{
                        "consultant_information_isDisabled": false,
                                "name_of_consultant_isDisabled": false,
                                "gender_of_consultant_isDisabled": false,
                                "professional_treatment_isDisabled": false,
                                "areas_of_expertise_isDisabled": false,
                                "introduction_to_consultants_isDisabled": false,
                                "photos_of_consultants_isDisabled": false,
                                  },
                                // 用户列表
            list_user_consultant_information: [],
                        // 用户组
            group_user_consultant_information: "",
                                                              // 咨询师性别选项列表
          list_gender_of_consultant: [],
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
            url: _self.$fullUrl('/api/psychological_counseling/upload?'),
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
            url: _self.$fullUrl('/api/psychological_counseling/upload?'),
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
                                                              uni.db.del("form");
      return param;
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
     * 获取咨询师用户组
     */
    async get_group_user_consultant_information() {
      this.form["consultant_information"] = this.user.user_id;
      var json = await this.$get("~/api/user_group/get_obj?name=咨询师");
      if(json.result && json.result.obj){
        this.group_user_consultant_information = json.result.obj;
        this.get_user_session_consultant_information(this.form['consultant_information'])
      }
      else if(json.error){
        console.error(json.error);
      }
    },
    get_user_session_consultant_information(id){
      var _this = this;
      var user_id = {"user_id":id}
      var url = "~/api/"+_this.group_user_consultant_information.source_table+"/get_obj?"
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
                  if (arr[i] !== "consultant_information") {
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
     * 获取咨询师性别列表
     */
    async get_list_gender_of_consultant() {
          ['男','女'].map((o) => this.list_gender_of_consultant.push({value:o,text:o}));
            },
        
            
            
            
            
    
    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func){
                                                            },

    is_view(){
      var bl = this.user_group == "管理员";

      if(!bl){
        bl = this.$check_action('/psychological_counseling/table','add');
        console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
      }
      if(!bl){
        bl = this.$check_action('/psychological_counseling/table','set');
        console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
      }
      if(!bl){
        bl = this.$check_action('/psychological_counseling/view','add');
        console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
      }
      if(!bl){
        bl = this.$check_action('/psychological_counseling/view','set');
        console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
      }
      if(!bl){
        bl = this.$check_action('/psychological_counseling/view','get');
        console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
      }

      console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

      return bl;
    },

  },
  created() {
            this.get_list_user_consultant_information();
            this.get_group_user_consultant_information();
                            this.get_list_gender_of_consultant();
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

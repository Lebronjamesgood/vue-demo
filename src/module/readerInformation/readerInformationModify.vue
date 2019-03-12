<template>
	<div>
	<div id="readerInformationModify">
		<div>
			<h1>读者信息管理</h1>
		</div>
		<div>
			<span class="nospecial">请选择读者类型：</span>
			<el-select v-model="value_reader_type" placeholder="请选择">
			    <el-option
			      v-for="item in reader_options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
		<div>
			<span class="nospecial">姓名：</span>
			<el-input
			    size="small"
			    placeholder="请输入姓名"
			    v-model="input_name">
			 </el-input>
		</div>
		<div>
			<span class="nospecial">性别：</span>
			<el-radio v-model="radio" label="men">备选项</el-radio>
  			<el-radio v-model="radio" label="women">备选项</el-radio>
		</div>
		<div>
			<span class="nospecial">所在院系：</span>
			<el-cascader
			    :options="departments_options"
			    v-model="selectedOptions_departments"
			    @change="handleChange_departments">
			</el-cascader>
		</div>
		<div>
			<span class="nospecial">出生日期：</span>
			<el-date-picker
			      v-model="born_time"
			      type="datetime"
			      placeholder="选择日期时间">
			</el-date-picker>
		</div>
		<div>
			<span class="nospecial">注册日期：</span>
			<el-date-picker
			      v-model="value_register"
			      type="date"
			      placeholder="选择日期">
		    </el-date-picker>
		</div>
		<div>
			<el-button type="primary" @click="submit()">确定</el-button>
		</div>
		
	</div>
	<div>
		<el-dialog
			  title="提示"
			  :visible.sync="centerDialogVisible"
			  width="30%"
			  center>
			  <span>读者信息修改成功！</span>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
			  </span>
		</el-dialog>
	</div>
</div>	
</template>
<script>
	export default{
		data(){
			return{
				centerDialogVisible: false,
				input_name:'',
				radio:'men',
				value_reader_type:'',
				departments_options:[{
		          value: 'zhinan',
		          label: '指南',
		          children: [{
		            value: 'shejiyuanze',
		            label: '设计原则',
		            children: [{
		              value: 'yizhi',
		              label: '一致'
		            }, {
		              value: 'fankui',
		              label: '反馈'
		            }, {
		              value: 'xiaolv',
		              label: '效率'
		            }, {
		              value: 'kekong',
		              label: '可控'
		            }]
		          }, {
		            value: 'daohang',
		            label: '导航',
		            children: [{
		              value: 'cexiangdaohang',
		              label: '侧向导航'
		            }, {
		              value: 'dingbudaohang',
		              label: '顶部导航'
		            }]
		          }]
		        }, {
		          value: 'zujian',
		          label: '组件',
		          children: [{
		            value: 'basic',
		            label: 'Basic',
		            children: [{
		              value: 'layout',
		              label: 'Layout 布局'
		            }, {
		              value: 'color',
		              label: 'Color 色彩'
		            }, {
		              value: 'typography',
		              label: 'Typography 字体'
		            }, {
		              value: 'icon',
		              label: 'Icon 图标'
		            }, {
		              value: 'button',
		              label: 'Button 按钮'
		            }]
		          }, {
		            value: 'form',
		            label: 'Form',
		            children: [{
		              value: 'radio',
		              label: 'Radio 单选框'
		            }, {
		              value: 'checkbox',
		              label: 'Checkbox 多选框'
		            }, {
		              value: 'input',
		              label: 'Input 输入框'
		            }, {
		              value: 'input-number',
		              label: 'InputNumber 计数器'
		            }, {
		              value: 'select',
		              label: 'Select 选择器'
		            }, {
		              value: 'cascader',
		              label: 'Cascader 级联选择器'
		            }, {
		              value: 'switch',
		              label: 'Switch 开关'
		            }, {
		              value: 'slider',
		              label: 'Slider 滑块'
		            }, {
		              value: 'time-picker',
		              label: 'TimePicker 时间选择器'
		            }, {
		              value: 'date-picker',
		              label: 'DatePicker 日期选择器'
		            }, {
		              value: 'datetime-picker',
		              label: 'DateTimePicker 日期时间选择器'
		            }, {
		              value: 'upload',
		              label: 'Upload 上传'
		            }, {
		              value: 'rate',
		              label: 'Rate 评分'
		            }, {
		              value: 'form',
		              label: 'Form 表单'
		            }]
		          }, {
		            value: 'data',
		            label: 'Data',
		            children: [{
		              value: 'table',
		              label: 'Table 表格'
		            }, {
		              value: 'tag',
		              label: 'Tag 标签'
		            }, {
		              value: 'progress',
		              label: 'Progress 进度条'
		            }, {
		              value: 'tree',
		              label: 'Tree 树形控件'
		            }, {
		              value: 'pagination',
		              label: 'Pagination 分页'
		            }, {
		              value: 'badge',
		              label: 'Badge 标记'
		            }]
		          }, {
		            value: 'notice',
		            label: 'Notice',
		            children: [{
		              value: 'alert',
		              label: 'Alert 警告'
		            }, {
		              value: 'loading',
		              label: 'Loading 加载'
		            }, {
		              value: 'message',
		              label: 'Message 消息提示'
		            }, {
		              value: 'message-box',
		              label: 'MessageBox 弹框'
		            }, {
		              value: 'notification',
		              label: 'Notification 通知'
		            }]
		          }, {
		            value: 'navigation',
		            label: 'Navigation',
		            children: [{
		              value: 'menu',
		              label: 'NavMenu 导航菜单'
		            }, {
		              value: 'tabs',
		              label: 'Tabs 标签页'
		            }, {
		              value: 'breadcrumb',
		              label: 'Breadcrumb 面包屑'
		            }, {
		              value: 'dropdown',
		              label: 'Dropdown 下拉菜单'
		            }, {
		              value: 'steps',
		              label: 'Steps 步骤条'
		            }]
		          }, {
		            value: 'others',
		            label: 'Others',
		            children: [{
		              value: 'dialog',
		              label: 'Dialog 对话框'
		            }, {
		              value: 'tooltip',
		              label: 'Tooltip 文字提示'
		            }, {
		              value: 'popover',
		              label: 'Popover 弹出框'
		            }, {
		              value: 'card',
		              label: 'Card 卡片'
		            }, {
		              value: 'carousel',
		              label: 'Carousel 走马灯'
		            }, {
		              value: 'collapse',
		              label: 'Collapse 折叠面板'
		            }]
		          }]
		        }, {
		          value: 'ziyuan',
		          label: '资源',
		          children: [{
		            value: 'axure',
		            label: 'Axure Components'
		          }, {
		            value: 'sketch',
		            label: 'Sketch Templates'
		          }, {
		            value: 'jiaohu',
		            label: '组件交互文档'
		          }]
		        }],
		        selectedOptions_departments:[],
		        born_time:'',
		        reader_options: [{
		          value: '选项1',
		          label: '黄金糕'
		        }, {
		          value: '选项2',
		          label: '双皮奶'
		        }, {
		          value: '选项3',
		          label: '蚵仔煎'
		        }, {
		          value: '选项4',
		          label: '龙须面'
		        }, {
		          value: '选项5',
		          label: '北京烤鸭'
		        }],
		        value_register:''
		      }
		    },
		    methods:{
		    	handleChange_departments(){

		    	},
		    	submit(){
		    		this.centerDialogVisible = true
		    	}
		    }  
		}
</script>
<style lang='scss'>
	.el-input__inner{
		width:auto;
	}
	.el-input{
		width:auto;
	}
	div#readerInformationModify>div{
		margin-top:20px;
		width: 30%;
    	margin-left:  auto;
    	margin-right:   auto;
		>span.nospecial{
			float: left;
			display: inline-block;
		    width: 200px;
		    text-align: left;
		}
	}
	div#readerInformationModify{
		margin-top: 50px;
		padding: 30px 0 100px 0;
    	border: 1px solid #DCDFE6;
    	
	}
	div#readerInformationModify>div:nth-child(8){
		margin-top:100px;
		button{
			width:200px;
		}
    }
	h1{
		margin-bottom: 100px;
	}


</style>
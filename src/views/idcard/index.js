import React, { Component } from 'react';
import { Upload, message } from 'antd'; 
export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
  　　loading: false,
    };
  }
  componentDidMount() {
  }
render() {
  const uploadButton = (
  <div>
    <div className="ant-upload-text">上传</div>
  </div>
);
const { imageUrl } = this.state;

const props = {
  name: "avatar",
  showUploadList: false,//设置只上传一张图片，根据实际情况修改
  customRequest: info => {//手动上传
  const formData = new FormData();
  formData.append('avatar', info.file);//名字和后端接口名字对应
  console.log(info)
},
onRemove: file => {//删除图片调用
  this.setState(state => {
  const index = state.fileList.indexOf(file);
  const newFileList = state.fileList.slice();
  newFileList.splice(index, 1);
  return {
    fileList: newFileList,
  };
});
},
listType: "picture-card",
className: "avatar-uploader",

beforeUpload: file => {//控制上传图片格式
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('您只能上传JPG/PNG 文件!');
    return;
  }
 const isLt2M = file.size / 1024 / 1024 < 2;
 if (!isLt2M) {
   message.error('图片大小必须小于2MB!');
   return;
}
  return isJpgOrPng && isLt2M;
},
};
  return (
    <div>
      <Upload {...props}>
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </div>
   )
}
}
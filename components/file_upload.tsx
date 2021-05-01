import React, { Component } from 'react';
import axios from 'axios';
import styles from './file_upload.module.css';

interface IProps {
  file: any,
  filename: string,
}

class FileUpload extends Component<IProps> {
    state: IProps
    
    constructor(props: IProps) {
        super(props);

        this.state = {
          file: null,
          filename: "Choose a File",
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault() // Stop form submit
        this.fileUpload(this.state.file);
    }

    onChange(event) {
      if (event.target.files[0]) {
        this.setState({ file: event.target.files[0] });
        this.setState({ filename: event.target.files[0].name });
      } else {
        this.setState({ filename: "Choose a File" });
      }
    }

    fileUpload(file){
        const url = '/api/files';
        const config = { headers: { 'content-type': 'multipart/form-data' } };
        const fileName = this.state.filename;
        const formData = new FormData();
        
        formData.append('file', file);
  
        let request = axios.post(url, formData, config);

        request.then((response) => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.response);
        });
    }
    
    render() {
      return (
        <>
          <form onSubmit={this.onFormSubmit} className={styles.form}>
            <div>
              <label htmlFor="upload-file" className={styles.label}>{this.state.filename}</label>
              <input id="upload-file" type="file" onChange={this.onChange} className={styles.file} />
            </div>
            <button type="submit" className={styles.button}>Upload</button>
          </form>
          <link rel="stylesheet" type="text/css" href="/css/notifications.css"></link>
          <script src="https://kit.fontawesome.com/4ccef4426b.js" crossOrigin="anonymous"></script>
        </>
      )
    }
}

export default FileUpload;
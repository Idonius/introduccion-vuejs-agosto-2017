<template>
  <div class="b-project-list">
    <h2>Proyectos</h2>
    <div class="b-project" v-for="project in projects">
      <div class="b-project__title-container">
        <a href="#">
          <h3 class="b-project__title">{{ project.title }}</h3>
        </a>
      </div>
      <div class="b-project__description">
        {{ project.description }}
      </div>
      <div class="b-project__created-at">
        {{ project.created_at }}
      </div>
      <div class="b-project__actions">
        <a href="#" v-on:click="deleteProject(project)">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    name: "project-list",
    data() {
      return {
        projects: []
      }

    },
    filters: {
      formatDate: ( date, outputFormat ) => {
        return moment( date ).format( outputFormat );
      }
    },
    created: function() {
      const serverURL = 'http://172.104.91.187/projects';

      // Obtener la lista de proyectos por AJAX
      const configAxios = {
        url: serverURL,
        method: 'get',
        responseType: 'json',
        data: {},
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': 'zOGORFLK8T7MAejwUOLvZ5nBSGlPWFOwYvNOfBXm11ceQtHfuX783lTedoln'
        }
      };

      axios.request( configAxios ).then( ( response ) => {
        console.log( response );
        this.projects = response.data;
      } );
    },
    methods: {
      deleteProject: ( project ) => {
        console.log( project );
      }
    }

  }
</script>
<style>

  .b-project-list {
    border-top: 1px solid #1abc9c;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background: white;
    padding: 20px;
    margin-top: 20px;
  }

  .b-project {
    overflow: hidden;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 10px;
  }

  .b-project__title {
    font-size: 18px;
    color: #1abc9c;
    line-height: 1.5em;
  }

  .b-btn-new-project {
    height: 40px;
  }

  .b-project__actions {
    margin-top: 10px;
    background: #f1f1f1;
    padding: 10px 15px 6px 15px;
  }

  .b-project__actions .fa {
    color: #000;
    font-size: 20px;
  }

  .b-project__actions .fa:hover {
    color: #1abc9c;
    cursor: pointer;
  }

</style>

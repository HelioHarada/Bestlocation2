<template>
    <div class="modal fade" id="modal-delete" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" @click="deletarAgora()" class="btn btn-danger">Deletar</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>


export default {
  props: ['id'],
  methods:{
    deletarAgora(){
      console.log(this.id)
    }
  },
  created(){
    console.log(this.id)
  }
}
</script>
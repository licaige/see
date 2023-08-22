import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { deepClone } from '~/utils/utils'

export default ({ api, callback, defForm = {} }) => {
  const form = ref(deepClone(defForm))
  const subApi = ref(api)
  const editRef = ref()
  const loading = ref(false)
  const dwDialogRef = ref()

  const onReset = () => {
    form.value = deepClone(defForm)
  }
  const initPicture = () => {
    if (!defForm.picture) {
      defForm.picture = {
        pictureList: []
      }
      form.value = deepClone(defForm)
    }
  }
  const onClose = () => {
    dwDialogRef.value.closeDialog()
  }
  const onSubmit = async () => {
    await editRef.value.validate((valid, fields) => {
      if (valid) {
        if (loading.value) {
          return
        }
        loading.value = true
        subApi
          .value(form.value)
          .then(rs => {
            ElMessage({
              message: '操作成功',
              type: 'success'
            })
            callback && callback()
          })
          .finally(() => {
            loading.value = false
          })
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  return {
    form,
    dwDialogRef,
    subApi,
    editRef,
    onClose,
    loading,
    initPicture,
    onReset,
    onSubmit
  }
}

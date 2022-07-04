export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    console.log('error', error);
    // if(error.response.status === 500) {
    //   redirect('/sorry')
    // }
  })
}

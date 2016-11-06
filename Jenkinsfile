node ('master'){
  deleteDir()
  stage 'Build and Test'
  git url: "https://github.com/patelanuj28/node-roman-to-decimal.git"
  sh 'npm install'
  sh 'mocha'
 }

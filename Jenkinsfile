node ('master'){
  deleteDir()
  stage 'Configure'
  git url: "https://github.com/patelanuj28/node-roman-to-decimal.git"
  sh 'echo $PATH'
  sh 'npm install'
  sh 'node --version'
  stage 'Test'
  sh 'mocha'
 }

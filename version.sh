
echo "JOB: $JOB_NAME" > version.txt
echo "BUILD NUMBER: $BUILD_NUMBER" >> version.txt
echo "GIT REVISION:" >> version.txt
git log -n 1 >> version.txt

pipeline {
    agent any
    environment {
        IMAGE_NAME = 'node-express-mongo-boilerplate'
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-credentials', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'docker login -u $USER -p $PASS'
                    sh 'docker tag ${IMAGE_NAME} $USER/${IMAGE_NAME}'
                    sh 'docker push $USER/${IMAGE_NAME}'
                }
            }
        }
    }
}
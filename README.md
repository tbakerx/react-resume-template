# React JS Resume Website Template
Forked from tbakerx/react-resume-template

## Changelog

Added multi-stage docker build. Simply run `docker-compose up -d` in the root directory to start serve this app on `localhost:3000`

```
$ docker-compose up -d
[+] Building 125.6s (17/18)
 => [internal] load build definition from Dockerfile                                                                                                                                      0.1s
 => => transferring dockerfile: 1.11kB                                                                                                                                                    0.0s 
 => [internal] load .dockerignore                                                                                                                                                         0.0s 
 => => transferring context: 2B                                                                                                                                                           0.0s 
 => [internal] load metadata for docker.io/library/node:latest                                                                                                                          125.4s
 => [internal] load build context                                                                                                                                                        12.8s
 => => transferring context: 264.30MB                                                                                                                                                    12.7s 
 => CACHED [stage-1 1/4] FROM docker.io/library/node:latest@sha256:6da4e30e3952e460fe4ad256e46a8b79acce46dd596bbe4ef882d5ec0d1ef6cb                                                       0.0s 
 => CACHED [base  2/10] RUN mkdir /app                                                                                                                                                    0.0s
 => CACHED [base  3/10] WORKDIR /app                                                                                                                                                      0.0s 
 => CACHED [base  4/10] COPY package.json /app/package.json                                                                                                                               0.0s 
 => CACHED [base  5/10] RUN yarn install                                                                                                                                                  0.0s 
 => [base  6/10] COPY . /app                                                                                                                                                             17.7s
 => [stage-1 2/4] COPY . ./app                                                                                                                                                           10.0s 
 => [base  7/10] RUN apt-get install curl                                                                                                                                                 2.5s
 => [base  8/10] RUN apt-get update &&     apt-get -y install sudo &&     apt-get -y install git &&     apt-get -y install vim &&     curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg  42.6s
 => [base  9/10] RUN yarn lint --fix                                                                                                                                                      5.4s
 => [base 10/10] RUN yarn build                                                                                                                                                          33.0s
 => [stage-1 3/4] COPY --from=base ./app ./app                                                                                                                                            3.3s
 => [stage-1 4/4] WORKDIR /app                                                                                                                                                            0.0s
 => exporting to image                                                                                                                                                                    2.4s
 => => exporting layers                                                                                                                                                                   2.3s
 => => writing image sha256:71284ba7bd9720f0e70604f8bd5eac372d0e0920c071ce3bed54afb077f85a0c                                                                                              0.0s
 => => naming to docker.io/library/react-resume-template-frontend                                                                                                                         0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
[+] Running 2/2
 - Network react-resume-template_default  Created                                                                                                                                         0.8s 
 - Container frontend                     Starte
```

### 1. Make sure you have what you need

To build this website, you will need to have the latest stable versions of Node and Yarn downloaded and installed on your machine. If you don't already have them, you can get Node [here,](https://nodejs.org/en/download/) and Yarn [here.](https://yarnpkg.com/getting-started/install)

### 2. Fork and download this repo (and star if you like!)

Next, find the `Fork` button in the top right of this page. This will allow you to make your own copy, for more info on forking repo's see [here.](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) After this, download to your development machine using the green `Code` button at the top of the repo page.

### 3. Install dependencies and run

Once you have your own copy of this repo forked and downloaded, open the folder in your favorite terminal and run `yarn install` to install dependencies. Following this, run `yarn dev` to run the project. In your terminal you should be given the url of the running instance (usually http://localhost:3000 unless you have something else running).

### 4. Customize the data to make it your own

All of the data for the site is driven via a file at `/src/data/data.tsx`. This is where you'll find the existing content, and updating the values here will be reflected on the site. If you have the site running as described above, you should see these changes reflected on save. The data types for all of these items are given in the same folder in the `dataDef.ts` file. Example images can be found at `src/images/` and are imported in the data file. To change, simply update these images using the same name and location, or add new images and update the imports. 

### 5. Hook up contact form
Due to the variety of options available for contact form providers, I've hooked up the contact form only so far as handling inputs and state. Form submission and the actual sending of the email is open to your own implementation. My personal recommendation for email provider is [Sendgrid.](https://sendgrid.com/)

### 6. Make any other changes you like

Of course, all of the code is there and nothing is hidden from you so if you would like to make any other styling/data changes, feel free!

### 7. Deploy to Vercel and enjoy your new Resume Website

Deploying your new site to Vercel is simple, and can be done by following their guide [here.](https://vercel.com/guides/deploying-nextjs-with-vercel) When you're all done and the build succeeds, you should be given a url for your live site, go there and you'll see your new personal resume website! Congratulations!

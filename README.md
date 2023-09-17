# [Bloodhound](https://demo.themesberg.com/volt-react-dashboard) 

## Inspiration
Managing diabetes is often cumbersome and many wearables output data across multiple devices. This is often coupled with the fact that it is quite hard to understand and find patterns in fluctuating glucose levels and other essential diabetic metrics at a simple glance. Often when diabetics meet with their doctors, these trends are identified manually across multiple data entries, days, readings, and graphs. How might we centralize the data and utilize an artificial intelligence model to predict and find trends that make pattern finding easier for doctors and patients to find the best diabetic management plan, carb to insulin ratios, and insulin rates for a routine?

## What it does
Our web application uses Terra API to connect to a real Freestyle Libre, a continuous glucose monitoring (CGM) device that diabetic patients utilize to get accurate blood glucose readings every 15 minutes. This data is a real diabetic patient’s and our application aims to find trends using AI. This information is then displayed as a text, which defines the average blood sugar levels for a given period, the instances where the blood glucose is going high or low, and possible predictions for anomalies in the data.

## How we built it

We connected the Freestyle Libre wearable to the Terra API, so we have real blood sugar level data. From our web application, we call the Terra API for each day of data that the user has specified, extracting the glucose data for each day, and inputs that data to OpenAI’s chat gpt 3.5 model. The OpenAI is prompt-engineered to spot patterns in blood sugar spikes, drops, and deduce/find possible correlations with lifestyle choices. Once fetched from the Large Language Model (LLM), the output is rendered in our react application through visual data representations, along with easy-to-understand data analytics findings. Additionally, OpenAI uses information about the user’s lifestyle, and current medical information to make possible suggestions about diabetic management and when to contact their doctor.

## Challenges we ran into
* **Data permissions.** We struggled to connect the Dexcom to the TerraAPI because our Canadian Dexcom account could not receive approval, and we could not create a new US-based account without compromising overriding real data from one of our teammates. Fortunately, we sought out access to a different wearable from someone outside our team and received permission to use their data. 
* **Setting up the UI/UX was surprisingly challenging.** Web development is an area none of us were confident in, so we faced various package and component issues. Our workaround was largely switching devices and learning to use templates instead of creating an app from scratch.
* **Parsing the data as a JSON object.**
* **OpenAI Token limit.** 

## Accomplishments that we're proud of
* **Using TerraAPI**: We were able to successfully connect a real Freestyle Libre wearable device to TerraAPI to fetch glucose data. We learned a lot about the API and how to integrate it into an application. 
* **Good collaboration**: Our shared vision for Bloodhound helped us create a really collaborative, exciting, and fun team environment. We believe that our collaboration is driven by a shared enthusiasm for learning and growing and by embracing new challenges and viewing setbacks as opportunities to improve, our team abilities are nothing short of a huge accomplishment.
* **Utilizing AI and Data Processing**: With the increase in AI hype, we really wanted to incorporate something that allowed diabetics to use artificial intelligence in trend forecasting and predictions. This was done with the help of OpenAI’s API, which many of our team members never used before! We also had to think about data points, compression, and variations, which took a decent amount of creativity, which we are proud of. 
* **Quick Thinking/Creativity**: Prior to speaking with the Terra API team, we had a different vision for our project. However, we pivoted quickly after finding a matching synergy for helping diabetics understand the trends in their glucose fluctuations throughout a period of time. In doing so, we had to think fast and understand the requirements and needs of our new project, Bloodhound. 

## What we learned
* **TerraAPI**: We were able to successfully connect a real Freestyle Libre wearable device to TerraAPI to fetch glucose data. We learned a lot about the API and how to integrate it into an application as well as how to handle JSON data. 
* **OpenAI API**: Many of our team members have never used OpenAI API for the chat gpt 3.5 model. We learned about prompt engineering and filtering trend arrows to generate a good and accurate output from the LLM. 
* **Workshops**: We learned a lot from the Hackathon workshops, especially from Terra API and Huggingface! Both of these workshops helped us define our project goals and tech stack and learn about AI models and APIs!

## What's next for bloodhound
* **Integrating Insulin Pump data & other body health metrics.**
* **Doctor-focused**: Although this app is meant for someone with diabetes to use, doctors would really benefit from assistance in analyzing and identifying patterns in health data. By incorporating context like family and personal medical history, along with manual concerns by the doctor, bloodhound could assist medical professionals in more quickly identifying pain points and advising patients about healthier diabetic management practices based on their CGM data. 
* **Accessibility features**: elderly populations face particularly high rates of diabetes. In the future, we would want accessibility features for all patients, but especially large text, text-to-speech, different languages, and an even simpler UI for easier use.



## Credits: 

Template used Volt React: This app built using the Volt React Dashboard Bootstrap 5 template. Demo found [here](https://demo.themesberg.com/volt-react-dashboard) 

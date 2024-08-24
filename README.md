1. Then click the **Extensions** tab from the top of the Google Sheet -> **Apps Script**.
2. On the `Code.gs` page, paste the code as in the `"google_app_script.gs"` page in this repository.
3. Click on **Deploy** on the top right corner.
4. If you haven’t deployed anything yet, click on **New deployment**, otherwise, click **Manage deployment**.
    - **If New Deployment**:
        1. Select type as **Web app**.
        2. Under **Who has access**, select **Anyone**.
        3. Copy the deployment ID and paste it in the `"google_app_script.gs"` in the mentioned line.
        4. Click **Deploy** to complete the deployment.
    - **If Managing an Existing Deployment**:
        1. Click on the pencil button to edit details.
        2. Change the version to a new version.
        3. Copy the deployment ID and paste it in the `"google_app_script.gs"` in the mentioned line.
        4. Click **Deploy** to complete the deployment.
5. Ensure that you pasted the deployment ID in `"google_app_script.gs"` at the mentioned part.
6. You’re good to go!

---
title: Configuring collaboration settings for API keys
order: 6
---

# Configuring collaboration settings for API keys
After you create an API key, you can share it with other members. You can also configure permissions for each member to implement collaborative development in your project team. 

## Description
- Credit consumption: After members are added for an API key, all the credits consumed by the API key are counted on the creator of the API key. 
- Creator: By default, the creator of an API key has the permissions of the Admin role on the key. 
- Member: The management permissions of a member on an API key are the same as the role permissions granted to the member on Teamwork. 

### Configuration path
Move the pointer over the target API key panel, and click **Action**. On the **Teamwork** tab of the API key management page, you can add members for the API key and assign roles with different permissions to the members. 

<Alert type="info">

**Note**: Only API key creators and members who have the Teamwork management permissions can do the following settings. 

</Alert>

### Adding members
You can add multiple members for an API key based on the following method:
1. On the **Teamwork** tab, click **Add Member**. 
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669275.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=6FmVfpO%2Fjv7ruPggrcW%2FGBvMQr0%3D)

2. In the dialog box that appears, enter the email address of the desired member and select a role for the member. 
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669276.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=6BkjqJfLtaHYgGTUGSfx9g8%2FTxo%3D)

3. Click **OK**. Then, the ZAN platform sends an email to the member. 
4. After the member confirms the details in the email, the member becomes a project member of the API key. 
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669277.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=glEEkks05cNQFBiPOClwj0l73D0%3D)

### Creating custom roles
By default, the platform provides the **Admin** role. If you want to create more roles that have different permissions, perform the following steps:
1. On the **Teamwork** tab, click **Create Role**. 
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669273.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=rpAsJ9c5Bk7KOBY1XXrganzgAXI%3D)

2. In the right-side panel that appears, click **Add** to add a new role. 
3. Enter a role name and specify the corresponding permissions as shown in the following figure. 
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669270.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=O%2Bjw64iU%2FiGBxj0KU3UIDscI9ds%3D)

   The platform provides a total of eight permission options, which are obtained by combining operation permissions and viewing permissions based on the following four permission modules. 
   | Permission module     | Operation permission (All)   | Viewing permission (Only View)                                                |
   |----------|--------------|----------------------------------------------------------------|
   | API Keys | None.            | Permission to view. By default, all roles are granted this permission.                                         |
   | Security | Permission to enable/disable key authentication.    | Permission to view.                                                            |
   | Security | Permission to edit a contract address allowlist.    | Permission to view.                                                           |
   | Security | Permission to edit an IP address allowlist.    | Permission to view.                                                            |
   | Security | Permission to edit an API request method allowlist. | Permission to view.                                                            |
   | Security | Permission to edit the request cost limit.     | Permission to view.                                                            |
   | Stats    | None.            | Permission to view all monitoring information, including information in the Credit Cost (Last 24 hours), Requests, Requests activity, and Requests Origin modules.  |
   | Teamwork | Permission to create/edit roles.      | Permission to view the list.                                                          |
   | Teamwork | Permission to add members.       | Permission to view the list.                                                          |
   | Teamwork | Permission to delete members.       | Permission to view the list.                                                          |
   | Teamwork | Permission to change the role of a member.     | Permission to view the list.                                                          |

4. If you want to add more roles, click **Add** again. 
5. After you add all the roles that you want, click **Yes** in the lower-right corner. 

### Modifying the role of a member
On the **Teamwork** tab, you can view the information about all the members of the API key in a list. If you want to change the role of a member, switch the role in the **Role** column. 
![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669181.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=E6nWa52xFw5q%2F1yPqIaowPR9Yy8%3D)

### Deleting a role
On the **Teamwork** tab, you can view the information about all the members of the API key in a list. If you want to delete a member, click **Delete** in the **Action** column. The member is deleted after your confirmation. 
![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669183.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=pT3SHzv5e2hT3TYsvCETJLgFjiE%3D)
---
title: API Key 多方协同
order: 6
---

# API Key 多方协同
创建API Key后，支持通过添加成员的方式，让其他成员可以共同使用当前API Key；同时，还支持为每位成员的自定义权限，以此来实现项目团队协同开发的能力。

## 相关说明
- Credit消耗：为 API Key 添加参与用户后，该API Key所消耗的 Credit 均由 API Key 的创建人来承担。
- 创建者：对于API Key 的创建者来说，默认拥有该 API Key 的管理员角色的权限。
- 参与用户：对于API Key 的参与用户来说，其对该 API Key 的管理权限与 Teamwork 中赋予的角色权限相同。

## 设置路径
鼠标悬浮在已创建的目标 API Key 面板后，点击 **Action** ，在 API Key 管理页的 **Teamwork** 功能页签下，可以为API Key 添加参与用户，并且支持为参与用户赋予不同权限的角色。

<Alert type="info">

**说明**：只有API Key的创建者或具有 Teamwork 管理权限的参与用户可以进行以下所有的设置。

</Alert>

## 添加参与用户
您可以为当前的 API Key 添加多个参与用户，具体添加方式如下：
1. 在 **Teamwork** 页签下，点击 **Add Member** 。
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669275.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=6FmVfpO%2Fjv7ruPggrcW%2FGBvMQr0%3D)

2. 在弹窗中填写参与用户的邮箱地址，并给该参与用户选择一个角色类型。
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669276.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=6BkjqJfLtaHYgGTUGSfx9g8%2FTxo%3D)

3. 点击 **确定** 后，ZAN会发送邮件给到目标参与用户。
4. 目标参与用户通过ZAN的统一邮件进行确认，确认后就会成为该 API Key 的项目成员。
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669277.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=glEEkks05cNQFBiPOClwj0l73D0%3D)

## 自定义角色
平台默认已给出一个 **管理员** 的角色类型，如需要创建更多不同权限的角色，操作如下:
1. 在 **Teamwork** 页签下，点击 **Create Role** 。
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669273.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=rpAsJ9c5Bk7KOBY1XXrganzgAXI%3D)

2. 在侧边抽屉式弹窗中，点击 **Add** 按钮，即可增加一行配置。
3. 按下图所示，填写角色名称及对应的权限。
   ![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669270.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=O%2Bjw64iU%2FiGBxj0KU3UIDscI9ds%3D)

   其中，对于权限选项会有8种，具体根据以下4种权限模块，区分操作权限和查看权限后组合得到。
   | 权限模块     | 操作权限（ALL）    | 查看权限（Only view）                                                |
   |----------|--------------|----------------------------------------------------------------|
   | API Keys | 无            | 可查看，默认所有角色都包含此权限。                                        |
   | Security | 启用/关闭密钥验证    | 可查看                                                            |
   | Security | 编辑合约地址白名单    | 可查看                                                            |
   | Security | 编辑IP地址白名单    | 可查看                                                            |
   | Security | 编辑 API 方法白名单 | 可查看                                                            |
   | Security | 编辑请求消耗上限     | 可查看                                                            |
   | Stats    | 无            | 可查看全部，如credit cost、requests、requests activity、requests origin。 |
   | Teamwork | 创建/编辑角色      | 可查看列表                                                          |
   | Teamwork | 添加参与用户       | 可查看列表                                                          |
   | Teamwork | 删除参与用户       | 可查看列表                                                          |
   | Teamwork | 修改参与用户角色     | 可查看列表                                                          |

4. 如需继续添加多个角色类型，可以再次点击下方的 **Add** 按钮进行下一个角色的配置。
5. 当完成所有角色的添加后，单击右下方的 **Yes** 。

## 修改参与用户的角色
在 **Teamwork** 页签下，会展示当前API Key 所有参与成员的列表信息。如需修改目标成员的角色，则可在列表的 **Role** 一栏下进行角色的切换。
![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669181.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=E6nWa52xFw5q%2F1yPqIaowPR9Yy8%3D)

## 删除参与用户
在 **Teamwork** 页签下，会展示当前API Key 所有参与成员的列表信息。如需删除目标成员，则可在列表的 **Action** 一栏下，点击 **Delete** ，经二次确认后即可删除该成员。
![image..png](http://icms-x-dita.oss-cn-zhangjiakou.aliyuncs.com/xdita-output/zh-CN/task23019473/images/p669183.png?Expires=7258150991&OSSAccessKeyId=LTAIJfoPL6wmrirR&Signature=pT3SHzv5e2hT3TYsvCETJLgFjiE%3D)
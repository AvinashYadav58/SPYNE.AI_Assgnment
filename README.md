

Step 1: Initialize the Project
npm init

Step 2: Install Required Dependencies
npm install 

Step 3: Start the Project
npm start

PORT=3000
MONGODB_URI=mongodb://localhost:27017/backend-assignment
JWT_SECRET=your_jwt_secret_key


APIs to store and get infromatiton

{
	"info": {
		"_postman_id": "bd90ed6d-3aab-4a0d-82ab-15c46d354895",
		"name": "SpyneAI",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "27097214"
	},
	"item": [
		{
			"name": "Signup",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"name\": \"John Doe\",\r\n  \"mobile\": \"1234567890\",\r\n  \"email\": \"john@example.com\",\r\n  \"password\": \"password123\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/auth/signup",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"auth",
						"signup"
					]
				}
			},
			"response": []
		},
		{
			"name": "Login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"email\": \"john@example.com\",\r\n  \"password\": \"password123\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/auth/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"auth",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "Search Users",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/users/search?name=John",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"search"
					],
					"query": [
						{
							"key": "name",
							"value": "John"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Follow User",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"followerId\": \"60c72b2f5f1b2c001c8a03a1\",\r\n  \"followingId\": \"60c72b2f5f1b2c001c8a03a2\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/follows",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"follows"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create Post",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"user_id\": \"60c72b2f5f1b2c001c8a03a1\",\r\n  \"text\": \"This is a text post.\",\r\n  \"image\": \"http://example.com/image.jpg\",\r\n  \"hashtags\": [\"#example\", \"#post\"]\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/discussions",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"discussions"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create Comment",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"discussion_id\": \"60c72b2f5f1b2c001c8a03a3\",\r\n  \"user_id\": \"60c72b2f5f1b2c001c8a03a1\",\r\n  \"text\": \"This is a comment.\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/comments",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"comments"
					]
				}
			},
			"response": []
		},
		{
			"name": "Like Post",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"discussionId\": \"60c72b2f5f1b2c001c8a03a3\",\r\n  \"userId\": \"60c72b2f5f1b2c001c8a03a1\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/likes",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"likes"
					]
				}
			},
			"response": []
		},
		{
			"name": "Like Comment",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/comments/:id/like",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"comments",
						":id",
						"like"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Reply to Comment",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"comment_id\": \"60c72b2f5f1b2c001c8a03a4\",\r\n  \"user_id\": \"60c72b2f5f1b2c001c8a03a1\",\r\n  \"text\": \"This is a reply to the comment.\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/replies",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"replies"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Post",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"text\": \"This is an updated text post.\",\r\n  \"image\": \"http://example.com/newimage.jpg\",\r\n  \"hashtags\": [\"#updated\", \"#post\"]\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/discussions/:id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"discussions",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Post",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/discussions/:id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"discussions",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Comment",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"text\": \"This is an updated comment.\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/comments/:id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"comments",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Comment",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/comments/:id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"comments",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "View Post",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/discussions/:id/view",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"discussions",
						":id",
						"view"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Search Posts by Hashtags",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/discussions/search?hashtags=#example,#post",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"discussions",
						"search"
					],
					"query": [
						{
							"key": "hashtags",
							"value": ""
						}
					],
					"hash": "example,#post"
				}
			},
			"response": []
		},
		{
			"name": "Create User",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"name\": \"John Doe\",\r\n  \"email\": \"john@example.com\",\r\n  \"password\": \"password123\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update User",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"name\": \"John Doe Updated\",\r\n  \"email\": \"johnupdated@example.com\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/users/:id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete User",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/users/:id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Show List of Users",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/users",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Search User Based on Name",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/users/search?name=John",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"users",
						"search"
					],
					"query": [
						{
							"key": "name",
							"value": "John"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Create Discussion",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"user_id\": \"60c72b2f5f1b2c001c8a03a1\",\r\n  \"text\": \"This is a text post.\",\r\n  \"image\": \"http://example.com/image.jpg\",\r\n  \"hashtags\": [\"#example\", \"#post\"]\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/discussions",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"discussions"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Discussion",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"text\": \"This is an updated text post.\",\r\n  \"image\": \"http://example.com/newimage.jpg\",\r\n  \"hashtags\": [\"#updated\", \"#post\"]\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/discussions/:id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"discussions",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Discussion",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/discussions/:id",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"discussions",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": ""
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get List of Discussions Based on Tags",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/discussions/tags?tags=#example,#post",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"discussions",
						"tags"
					],
					"query": [
						{
							"key": "tags",
							"value": ""
						}
					],
					"hash": "example,#post"
				}
			},
			"response": []
		},
		{
			"name": "Get List of Discussions Based on Text",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/discussions/search?text=text+post",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"discussions",
						"search"
					],
					"query": [
						{
							"key": "text",
							"value": "text+post"
						}
					]
				}
			},
			"response": []
		}
	]
}



# picked_number = int(input('Pick a number: '))
# for i in range(12):
#     result = picked_number * i
#     print(f'{picked_number} multiplied by {i} is: {result}')


# num = 1
# while num < 11:
#     print(f'number = {num}')
#     num += 1

# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }
# print(sample_dict["class"]["student"]["marks"]["history"])

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    if key in sample_dict:
        del sample_dict[key]

print(sample_dict)
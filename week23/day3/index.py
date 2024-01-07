from faker import Faker

# Create a Faker instance
fake = Faker()

# Generate a random name
random_name = fake.name()
print(f"Random Name: {random_name}")

# Generate a random address
random_address = fake.address()
print(f"Random Address: {random_address}")

# Generate a random email
random_email = fake.email()
print(f"Random Email: {random_email}")

# Generate a random sentence
random_sentence = fake.sentence()
print(f"Random Sentence: {random_sentence}")

# Generate a random date of birth
random_dob = fake.date_of_birth(minimum_age=18, maximum_age=65)
print(f"Random Date of Birth: {random_dob}")

# Generate a random phone number
random_phone = fake.phone_number()
print(f"Random Phone Number: {random_phone}")

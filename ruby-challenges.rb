# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# PSUEDOCODE:
# name a method called all_bevs
# input: array and string
# output: array
# Process: take the method all_bevs and place two parameters as placeholders. Using the select method on arr to select each word and see if that word includes specific letter, if so return with full word that meets the criteria.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def all_bevs (arr, letter)
    arr.select{|word| word.include? letter}
end

p all_bevs(beverages_array, letter_o)
p all_bevs(beverages_array, letter_t)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# PSUEDOCODE:
# name a method called some_states
# input: a hash
# output: an array
# Process: take the method some_states place value as a placeholder. using a chaining technique extracted values from the hash using .values combined with .flatten to combine the arrays and .sort to have sorted in alphabeitcal order.

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def some_states (value)
    value.values.flatten.sort
end

p some_states(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# PSUEDOCODE:
# name a class called Bike
# Process: create a class Bike. used attr_accessor. created def/end methods. used string interpolation for bike_info and a if/else for brakes.

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model)
        @model = model
        @current_speed = 0
        @wheels = 2
    end
    def set_model(model)
        @model = model 
    end
    def get_model
        @model
    end
    def set_current_speed
        @current_speed 
    end
    def get_current_speed
        @current_speed
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster(speed_increase)
        @current_speed = current_speed + (speed_increase)
    end
    def brakes(speed_decrease)
        @current_speed =current_speed - (speed_decrease)
        if current_speed < 0
            return 0
        else 
            return current_speed
        end
    end
end

trek = Bike.new('Trek')
trek.set_current_speed
p trek.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

p trek.pedal_faster(10)
p trek.pedal_faster(18)
p trek.brakes(5)
p trek.brakes(25)
module HelperMethods 

    def initialize(string) 
        @string = string
    end 

    def titleize
        array = @string.split(' ')
        output = ""
        for word in array
            unless word == 'in' || word == 'the' || word == 'of' || word == 'and' || word == 'or' || word || from do
                output += word.capitalize
            end
        end
        print output
    end
end
module HelperMethods 
    class Title
        def initialize(string) 
            @string = string
        end 

        def titleize
            array = @string.split(' ')
            output = ""
            for word in array
                unless %w(in the of and or from).include?(word)
                    output += "#{word.capitalize} "
                else
                    output +="#{word} "
                end
            end
           print output
        end
    end

    class Extend
        extend Title
    end

    class Include
        include Title
    end
end

Extend.titleize
Include.new.titleize

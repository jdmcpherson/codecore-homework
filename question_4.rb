major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]}

major_cities.each do |key, cities|
    print "#{key} has #{cities.length} main cities: "
    for value in cities
        if value == cities[cities.length - 1]
            print " and #{value}\n"
        elsif value == cities[0]
            print "#{value}"
        else
            print ", #{value}"
        end
    end
end
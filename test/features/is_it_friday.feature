Feature: Is it Friday Yet?

    Everybody whants to know when it's Friday

    Scenario Outline: Today is or is not Friday

        Given today is "<day>"
        When I ask whether it's friday yet
        Then I Should be told "<answer>"
        Examples:
            | day            | answer |
            | Friday         | TGIF   |
            | Monday         | Nope   |
            | anithing else! | Nope   |
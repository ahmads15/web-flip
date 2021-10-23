Feature: Flip page

Background: Open browser Flip 

Given User open browser page flip.id

@s1
Scenario Outline: User success click button Masuk,Biaya,Karir, dan Bantuan
    When User click '<button>'
    Then User can verify page '<verifyPage>'
    Examples:
        | button                   | verifyPage                 |
        | Masuk                    | masukPage                  |
        | Biaya                    | biayaPage                  |
        | Karir                    | karirPage                  |
        | Bantuan                  | bantuanPage                |


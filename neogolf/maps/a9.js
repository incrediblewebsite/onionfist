var map = {
    title: "Speed Bumps",
    maker: "Dododo73",
    init: function() {
        a.p([26.27007, 1.60007, 0.13007], [0, 0, 0], [0.26, 2.5, 5.2], "4.0", 0.3, 0, 1, false, false);
        a.p([11.000139999999998, 0.06014, 0.13014], [0, 0, 0], [24.74, 1.84, 3.82], "1", 0.3, 0, 1, false, false);
        a.p([8.19021, 1.24021, 1.07021], [0, 0, 0], [7.94, 1.06, 2.2], "1", 0.3, 0, 1, false, false);
        a.p([3.64028, 0.85028, 1.0702800000000001], [0, 0, 0.55], [2.14, 1.06, 2.2], "1", 0.3, 0, 1, false, false);
        a.p([12.59035, 0.6003499999999999, 1.07035], [0, 0, -0.71], [2.14, 1.06, 2.2], "1", 0.3, 0, 1, false, false);
        a.p([22.39042, 1.24042, -0.28958], [0, 0, 0], [7.94, 1.06, 2.2], "1", 0.3, 0, 1, false, false);
        a.p([17.880489999999998, 0.8504900000000001, -0.23951], [0, 0, 0.55], [2.14, 1.06, 2.2], "1", 0.3, 0, 1, false, false);
        a.e([24.97, 1.88, -0.23]);
    },
    post: function() {},
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [26.27007, 1.60007, 0.13007], [0, 0, 0], [0.26, 2.5, 5.2]);
        a.re('P1', [11.000139999999998, 0.06014, 0.13014], [0, 0, 0], [24.74, 1.84, 3.82]);
        a.re('P2', [8.19021, 1.24021, 1.07021], [0, 0, 0], [7.94, 1.06, 2.2]);
        a.re('P3', [3.64028, 0.85028, 1.0702800000000001], [0, 0, 0.55], [2.14, 1.06, 2.2]);
        a.re('P4', [12.59035, 0.6003499999999999, 1.07035], [0, 0, -0.71], [2.14, 1.06, 2.2]);
        a.re('P5', [22.39042, 1.24042, -0.28958], [0, 0, 0], [7.94, 1.06, 2.2]);
        a.re('P6', [17.880489999999998, 0.8504900000000001, -0.23951], [0, 0, 0.55], [2.14, 1.06, 2.2]);
        a.re('E0', [24.97, 1.88, -0.23], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
import supertest from 'supertest';
//import express from 'express';
import {expect} from 'chai';
import {createServerApp} from "../../js/app-helper";
import {indexRouter} from "../../js/routes/index";

describe('Get Spec', () => {
    let app,
        router,
        request;

    beforeEach(() => {
        app = createServerApp();
        router = indexRouter(app);
        request = supertest(app);
    });

    it('return title is "Express"', (done) => {
        request
            .get('/')
            .expect('Content-Type', /html/)
            .expect(/Express/)
            .expect(200, done);
    });
});